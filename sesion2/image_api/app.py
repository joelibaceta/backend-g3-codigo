from flask import Flask
from flask import request
from flask import send_file

import requests
from PIL import Image, ImageOps

app = Flask(__name__)

# Endpoint para validar si la aplicacion
# estan funcionando correctamente
@app.route('/ping')
def ping():
    return "pong"

# localhost:5000/image?src=https://...&mirror=true&grayscale=true
# https://www.rover.com/blog/wp-content/uploads/2019/10/puppy.jpg
@app.route('/image')
def image():
    # Obtener parametro src desde la url
    src = request.args.get("src")
    # Traer contenido de la imagen desde una url
    image_buffer = requests.get(src, stream=True).raw
    # Convertir contenido de imagen a clase Image de Pillow
    image = Image.open(image_buffer)
    # Obtener parametros: mirror y grayscale
    mirror_flag = request.args.get("mirror")
    grayscale_flag = request.args.get("grayscale")
    # Si no hay modificaciones la nueva imagen
    # es igual a la imagen original
    new_image=image
    # Si mirror es igual a "true"
    # Accionar operacion de conversion a imagen espejo
    if mirror_flag=="true":
        new_image=ImageOps.mirror(new_image)
    # Si grayscale es igual a "true"
    # Accionar operacion de conversion a escala de grises
    if grayscale_flag == "true":
        new_image=ImageOps.mirror(new_image)
    # Guardar la imagen resultante
    new_image.save("temp_file.jpg")
    # Retornar esa imagen nueva
    return send_file("temp_file.jpg")


