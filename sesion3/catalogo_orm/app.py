from flask import Flask

# Importado la clase SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from flask_marshmallow import fields

from flask import json

app = Flask(__name__)

# Definir el valor de la constante 
# de configuracion SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:rootcodigo@localhost/catalogo"

# Ampliar Flask con SQLAlchemy
db = SQLAlchemy(app)
# Ampliar Flask con Marshmallow
ma = Marshmallow(app)

class Producto(db.Model):
    """Representacion logica de la tabla Producto"""
    #__tablename__ = "producto"
    idProducto  = db.Column(db.Integer, primary_key = True)
    nombre      = db.Column(db.String(45))
    descripcion = db.Column(db.String(255))
    precio      = db.Column(db.Float)
    sku         = db.Column(db.String(45))
    idCategoria = db.Column(db.Integer)

    @property
    def precio_pen(self):
        return f"S./ {self.precio}"

    @property
    def precio_usd(self):
        return f"S./ {self.precio / 3.9}"

class ProductoSchema(ma.Schema):
    """Representacion de serializacion de Producto"""
    class Meta:
        fields = ("nombre", "precio_pen", "precio_usd")

@app.route('/')
def hello_world():
    return "hello world"

@app.route('/products')
def list_products():
    # // SELECT * FROM producto
    # Ejecutar consulta de seleccion
    # usando los metodos del ORM
    products = Producto.query.all()
    schema = ProductoSchema()
    data = schema.dump(products, many=True)

    # Personalizamos la estructura de respuesta
    response = {
        "status": "ok",
        "content": data
    }

    return json.dumps(response)
