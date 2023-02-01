import os
from typing import Tuple, List
from datetime import datetime

from dotenv import load_dotenv
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from neo4j import GraphDatabase
from cryptography.fernet import Fernet

load_dotenv()
uri = os.getenv("URI")
user = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
driver = GraphDatabase.driver("bolt://localhost:7687", auth=(user, password), database="neo4j")

app = Flask(__name__)
CORS(app)


def save_to_file(data):
    with open("logs.txt", "a") as file:
        file.write(data)

def get_products(tx):
    query = "MATCH (a)-[:INCLUDE]->(product:Product) RETURN a, product;"
    results = tx.run(query).data()
    products = [{
        "id": result["product"]["id"],
        "name": result["product"]["name"],
        "price": result["product"]["price"],
        "vege": result["product"]["vege"],
        "desc": result["product"]["desc"],
        "type": result["a"]["type"],
        "pickles": 0,
        "onion": 0,
        "becon": 0,
        "lettuce": 0,
        "bigbun": 0,
        "salt": 0,
        "pepper": 0,
        "egg": 0,
        "butter": 0,
        "tomato": 0,
        "ice": 0,
        "nocofeine": 0,
        "sugar": 0
    } for result in results]
    return products


def get_products_pattern(tx, pattern):
    query = f"""MATCH (a)-[:INCLUDE]->(product:Product) WHERE product.name =~ "(?i).*{pattern}.*" RETURN a, product;"""
    results = tx.run(query).data()
    products = [{
        "id": result["product"]["id"],
        "name": result["product"]["name"],
        "price": result["product"]["price"],
        "vege": result["product"]["vege"],
        "desc": result["product"]["desc"],
        "type": result["a"]["type"],
        "pickles": 0,
        "onion": 0,
        "becon": 0,
        "lettuce": 0,
        "bigbun": 0,
        "salt": 0,
        "pepper": 0,
        "egg": 0,
        "butter": 0,
        "tomato": 0,
        "ice": 0,
        "nocofeine": 0,
        "sugar": 0
    } for result in results]
    return products


def get_admin(tx):
    query = "MATCH (n:Admin) return n;"
    results = tx.run(query).data()
    admin = [{
        "login": result["n"]["login"],
        "passwordKey": result["n"]["passwordKey"],
        "password": result["n"]["password"]
    } for result in results]
    return admin


def encrypt_password(passwords):
    key = Fernet.generate_key()
    cipher_suite = Fernet(key)
    cipher_text = cipher_suite.encrypt(passwords.encode())
    return [key.decode(), cipher_text.decode()]


def decrypt_password(key, cipher_text):
    key = key.encode()
    cipher_suite = Fernet(key)
    plain_text = cipher_suite.decrypt(cipher_text.encode()).decode()

    return plain_text


@app.route('/products', methods=['GET'])
def get_products_route():
    with driver.session() as session:
        products = session.read_transaction(get_products)

    response = {'products': products}
    save_to_file(f"[{datetime.now()}] Get products request used\n")
    return jsonify(response)


@app.route('/admin', methods=['GET'])
def get_admin_route():
    with driver.session() as session:
        admin = session.read_transaction(get_admin)
    decrypted_password = decrypt_password(admin[0]["passwordKey"], admin[0]["password"])

    response = {'admin': [
        {
            "login": admin[0]["login"],
            "password": decrypted_password
        }
    ]}
    save_to_file(f"[{datetime.now()}] Get admin data request used\n")
    return jsonify(response)


@app.route('/admin', methods=['PATCH'])
def patch_admin_route():
    body = request.get_json()
    print(body)
    if len(body["login"]) > 0:
        query = f"""MATCH (n:Admin) SET n.login="{body["login"]}" """
        with driver.session() as session:
            admin = session.run(query).single()
    if len(body["password"]) > 0:
        encrypted_password = encrypt_password(body["password"])
        query1 = f"""MATCH (n:Admin) SET n.passwordKey="{encrypted_password[0]}", """
        query2 = f"""n.password="{encrypted_password[1]}";"""
        query = query1 + query2
        with driver.session() as session:
            admin = session.run(query).single()
        save_to_file(f"[{datetime.date}] Patch admin data request used\n")
        return {"message": "Node updated successfully"}, 205
    save_to_file(f"[{datetime.date}] Patch admin data request used\n")
    return {"message": "Node update failed"}, 404


@app.route(f"/products/<pattern>", methods=['GET'])
def get_products_pattern_route(pattern):
    with driver.session() as session:
        products = session.read_transaction(get_products_pattern, pattern)

    response = {'products': products}
    save_to_file(f"[{datetime.now()}] Get products matched with pattern request used\n")
    return jsonify(response)


@app.route('/products', methods=['POST'])
def add_products_route():
    product = request.get_json()
    if not product["vege"]:
        someString = "false"
    else:
        someString = "true"
    temp1 = f"""MATCH (type:{product["bigType"]}) CREATE (type)-[:INCLUDE]->(product:Product"""
    temp2 = "{" + f"""id:"{product["id"]}" """ + f""", name:"{product["name"]}", price:{product["price"]}"""
    temp3 = f""", vege:{someString}, desc:"{product["desc"]}" """ + "});"
    query = temp1 + temp2 + temp3
    with driver.session() as session:
        result = session.run(query).single()
    save_to_file(f"[{datetime.now()}] Add product request used\n")
    return {"message": "Node added successfully"}, 201


@app.route('/stats/post', methods=['POST'])
def post_cookie_to_analysis():
    body = request.get_json()
    products = ""
    for product in body["data"]:
        products += product["name"] + "\n"
    response = make_response("Ustawiono cookie")
    response.set_cookie("last_bought", products)
    save_to_file(f"[{datetime.now()}] Cookie set\n")
    return response


@app.route('/stats/get', methods=['GET'])
def get_cookie_to_analysis():
    cookie_value = request.cookies.get("last_bought")
    print(cookie_value)
    if cookie_value is None:
        return "None"
    return cookie_value


@app.route(f"/products/prod_id>", methods=['DELETE'])
def delete_products_id_route(prod_id):
    query = "MATCH (n:Product{" + f"""id:"{prod_id}" """ + "}) DETACH DELETE n;"
    with driver.session() as session:
        result = session.run(query).single()
    save_to_file(f"[{datetime.now()}] Delete product request used\n")
    return {"message": "Node deleted successfully"}, 204


@app.route(f"/products/<prod_id>", methods=['PUT'])
def put_products_id_route(prod_id):
    product = request.get_json()
    if not product["vege"]:
        someString = "false"
    else:
        someString = "true"
    query1 = """MATCH (n:Product{""" + f"""id:"{prod_id}" """ + """}) """
    query2 = f"""SET n.name="{product["name"]}", n.price={product["price"]}"""
    query3 = f""", n.vege={someString}, n.desc="{product["desc"]}" """ + ";"
    query = query1 + query2 + query3
    print(query)
    with driver.session() as session:
        result = session.run(query).single()
    save_to_file(f"[{datetime.now()}] Update product request used\n")
    return {"message": "Node updated successfully"}, 204


if __name__ == '__main__':
    app.run()
