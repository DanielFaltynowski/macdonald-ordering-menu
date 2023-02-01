import os
from typing import Tuple, List

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from neo4j import GraphDatabase
from cryptography.fernet import Fernet


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

st = "szefunio"
enc = encrypt_password(st)
dec = decrypt_password(enc[0], enc[1])
print(enc)
print(dec)
