# @app.route('/')
# def hello_world():
#     return "hello world"

from flask_restful import Resource
from flask import request

from models import Category

from app import db

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class CategoryController(Resource):

    def post(self):
        # Obtener el payload json
        data = request.json
        # Crear nueva instancia de categoria
        new_category = Category(**data)
        # Ejecutar transaccion
        db.session.add(new_category)
        db.session.commit()

