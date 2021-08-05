from flask import Flask
from flask import render_template

# Importado la clase SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

# Definir el valor de la constante 
# de configuracion SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:rootcodigo@localhost/catalogo"

# Ampliar Flask con SQLAlchemy
db = SQLAlchemy(app)


from models import Producto, Categoria

@app.route("/products")
def get_productos():
    products = Producto.query.order_by(Producto.nombre.desc())
    return render_template("index.html", products = products)

@app.route("/product/<id>")
def get_product(id):
    product = Producto.query.filter_by(idProducto = id).first()
    return render_template("show.html", product = product)

@app.route("/category/<id>/products")
def get_products_by_category(id):
    products = Producto.query.filter_by(idCategoria = id).order_by("nombre")
    return render_template("index.html", products = products)

