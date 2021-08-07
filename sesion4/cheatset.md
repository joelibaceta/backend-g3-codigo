# Flask cheatset

# Crear entorno virtual

python -m venv YOUR_VENV_NAME

cd YOUR_VENV_NAME
cd Scripts
activate

> Crear carpeta para proyecto flask FLASK_APP

# Crear aplicacion hello world

1. Crear archivo requeriments.txt y aregar las dependencias 

Flask
# ORM para bases de datos
SQLAlchemy
Flask-SQLAlchemy
# Driver de conexion a base de datos
PyMySQL
# Extension para APIs REST
Flask-RESTful

2. Instalar las dependencias

pip install -r requirements.txt

3. Crear el archivo app.py