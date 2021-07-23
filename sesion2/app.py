from flask import Flask

from flask import request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'hello world'

@app.route('/user/<id>')
def get_user(id):
    return f"user: {id}"

@app.route('/name_form', methods=['POST'])
def name_form():
    data = request.form
    name = data["first_name"]
    return f"hello {name}"

@app.route('/name_post', methods=['POST'])
def name_post():
    json = request.json
    name = json["first_name"]
    return f"hello {name}"

# /name?first_name=Charles&last_name=Gonzales
@app.route('/name')
def hello_world_name():
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    return f"hello {first_name} {last_name}"

if __name__ == '__main__':
    app.run()