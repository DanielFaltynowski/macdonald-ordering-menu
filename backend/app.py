from flask import Flask, jsonify, request
from neo4j import GraphDatabase
from dotenv import load_dotenv
from flask_cors import CORS
import os

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
        "type":result["a"]["type"],
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
    query = f"""MATCH (a)-[:INCLUDE]->(product:Product) WHERE product.name =~ "{pattern}.*" RETURN a, product;"""
    results = tx.run(query).data()
    products = [{
        "id": result["product"]["id"],
        "name": result["product"]["name"],
        "price": result["product"]["price"],
        "vege": result["product"]["vege"],
        "desc": result["product"]["desc"],
        "type":result["a"]["type"],
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


@app.route(f"/products/<pattern>", methods=['GET'])
def get_products_pattern_route(pattern):
    with driver.session() as session:
        products = session.read_transaction(get_products_pattern, pattern)

    response = {'products': products}
    return jsonify(response)


if __name__ == '__main__':
    app.run()

