import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
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
        "password": result["n"]["password"]
    } for result in results]
    return admin


def encrypt_password(passwords: str) -> bytes:
    key = Fernet.generate_key()
    cipher_suite = Fernet(key)
    cipher_text = cipher_suite.encrypt(passwords.encode())
    return cipher_text


def decrypt_password(cipher_text: bytes) -> str:
    key = Fernet.generate_key()
    cipher_suite = Fernet(key)
    plain_text = cipher_suite.decrypt(cipher_text).decode()
    return plain_text


@app.route('/products', methods=['GET'])
def get_products_route():
    with driver.session() as session:
        products = session.read_transaction(get_products)

    response = {'products': products}
    return jsonify(response)


@app.route('/admin', methods=['GET'])
def get_admin_route():
    with driver.session() as session:
        admin = session.read_transaction(get_admin)

    response = {'admin': admin}
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
        query = f"""MATCH (n:Admin) SET n.password="{encrypted_password}";"""
        with driver.session() as session:
            admin = session.run(query).single()
        return {"message": "Node updated successfully"}, 205
    return {"message": "Node update failed"}, 404


@app.route(f"/products/<pattern>", methods=['GET'])
def get_products_pattern_route(pattern):
    with driver.session() as session:
        products = session.read_transaction(get_products_pattern, pattern)

    response = {'products': products}
    return jsonify(response)


@app.route('/products', methods=['POST'])
def add_products_route():
    product = request.get_json()
    if not product["vege"]:
        someString = "false"
    else:
        someString = "true"
    temp1 = f"""MATCH (type:{product["bigType"]}) CREATE (type)-[:INCLUDE]->(product:Product"""
    temp2 = "{" + f"""id:{product["id"]}""" + f""", name:"{product["name"]}", price:{product["price"]}"""
    temp3 = f""", vege:{someString}, desc:"{product["desc"]}" """ + "});"
    query = temp1 + temp2 + temp3
    with driver.session() as session:
        result = session.run(query).single()

    return {"message": "Node added successfully"}, 201


@app.route(f"/products/<int:prod_id>", methods=['DELETE'])
def delete_products_id_route(prod_id):
    query = "MATCH (n:Product{" + f"""id:{prod_id}""" + "}) DETACH DELETE n;"
    with driver.session() as session:
        result = session.run(query).single()
    return {"message": "Node deleted successfully"}, 204


if __name__ == '__main__':
    app.run()
