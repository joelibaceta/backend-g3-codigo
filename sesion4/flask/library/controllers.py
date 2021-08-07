# @app.route('/')
# def hello_world():
#     return "hello world"


from flask_restful import Resource
from flask import request

from models import Category, Book
from schemas import CategorySchema, BookSchema

from app import db

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

class BooksByCategoryController(Resource):

    def get(self, id):
        books = Book.query.filter_by(idCategory = id)
        schema = BookSchema()
        data = schema.dump(books, many=True)
        return data

class BooksController(Resource):

    def post(self):
        data = request.json
        new_book = Book(**data)
        db.session.add(new_book) # INSERT INTO Book
        db.session.commit()
        return {"status": "ok"}, 201
    
    def get(self):
        books = Book.query.all()
        schema = BookSchema()
        data = schema.dump(books, many=True)
        return data

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

