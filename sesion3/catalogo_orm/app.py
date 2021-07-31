from flask import Flask

# Importado la clase SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Definir el valor de la constante 
# de configuracion SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:rootcodigo@localhost/catalogo"

# Ampliar Flask con SQLAlchemy
db = SQLAlchemy(app)

class Producto(db.Model):
    idProducto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(45))
    descripcion = db.Column(db.String(255))
    precio = db.Column(db.Float)
    sku = db.Column(db.String(45))
    idCategoria = db.Column(db.Integer)

@app.route('/')
def hello_world():
    return "hello world"

@app.route('/products')
def list_products():
    # // SELECT * FROM producto
    products = Producto.query.all() 
    names = []
    for product in products:
        names.append(product.nombre)
    return ", ".join(names)
