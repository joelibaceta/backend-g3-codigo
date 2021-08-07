# @app.route('/')
# def hello_world():
#     return "hello world"

from flask_restful import Resource
from flask import request

from models import Category
from schemas import CategorySchema

from app import db

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class CategoriesController(Resource):

    def get(self):
        # Obtener la coleccion de categorias
        categories = Category.query.all()
        # Instanciar el serializador (Schema)
        schema = CategorySchema()
        # Serializar nuestra coleccion de categorias
        data = schema.dump(categories, many=True)
        # Retornar datos serializados
        return data

    def post(self):
        # Obtener el payload json
        data = request.json
        # Crear nueva instancia de categoria
        new_category = Category(**data)
        # Ejecutar transaccion
        db.session.add(new_category)
        db.session.commit()

        return {"status": "ok"}, 201

