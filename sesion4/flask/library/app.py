from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship

app = Flask(__name__)
api = Api(app)

# Configurando parametros de conexion
# mysql+pymysql://USER:PASSWORD@SERVER/DATABASE
conn = "mysql+pymysql://root:rootcodigo@localhost/librarydb"
app.config['SQLALCHEMY_DATABASE_URI'] = conn

db = SQLAlchemy(app)

from controllers import HelloWorld
from controllers import CategoryController

api.add_resource(HelloWorld, '/')
api.add_resource(CategoryController, '/categories')