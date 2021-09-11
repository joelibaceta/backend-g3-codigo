import os
from flask import Flask
from flask import request
from flask.wrappers import Request, Response

from dotenv import load_dotenv

import httpx

app = Flask(__name__)

load_dotenv()

@app.route('/ping')
def ping():
    return "pong"

@app.route('/alert', methods =['POST'])
async def create_alert():

    header = request.headers["authorization"]
    headers={
        "authorization": header
    }
    
    async with httpx.AsyncClient(headers=headers) as client:
        response = await client.get(os.getenv("AUTH_SERVICE_URL"))

    if response.status_code == 200:
        payload = response.json()

        return f"Alerta enviada por {payload['username']}"
    else:
        return Response(status=401)


