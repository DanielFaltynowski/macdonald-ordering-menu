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


@app.route('/products', methods=['GET'])
def get_products_route():
    with driver.session() as session:
        products = session.read_transaction(get_products)

    response = {'products': products}
    return jsonify(response)


if __name__ == '__main__':
    app.run()

