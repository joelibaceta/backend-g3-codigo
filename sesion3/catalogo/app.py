from flask import Flask

# Importado la clase SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Definir el valor de la constante 
# de configuracion SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:rootcodigo@localhost/catalogo"

# Ampliar Flask con SQLAlchemy
db = SQLAlchemy(app)

@app.route('/')
def hello_world():
    return "hello world"

@app.route('/products')
def list_products():
    # Consulta TSQL
    query = "SELECT * FROM producto"
    # Ejecutando consulta y guardando resultados
    result = db.engine.execute(query)
    nombres = []
    # Iterando las filas de los resultados
    for row in result:
        # Guardando el nombre de cada fila en 
        # la lista nombres
        nombres.append(row[1])
    # Devolvemos los nombres de los productos
    # separados por coma
    return ", ".join(nombres)