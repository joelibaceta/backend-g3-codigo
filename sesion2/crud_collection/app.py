from flask import Flask
from flask import request
from flask import send_file
from flask import send_from_directory
from flask import render_template

from PIL import Image, ImageFilter

app = Flask(__name__)

app.debug = True

users = {
    "u01": {
        "first_name": 'Ted',
        "last_name": 'Thompson'
    },
    "u02": {
        "first_name": 'Marie',
        "last_name": 'Hamilton'
    }
}

@app.route('/')
def index():
    return 'hello world'

# Get all users
@app.route('/users.json')
def get_users():
    return users

@app.route('/users.html')
def get_user_view():
    size = len(users)
    return render_template("users.html", count=size, users=users)

# Get User using queryparams
# /user?id=u01
# /user?id=u02
@app.route('/user')
def get_user():
    id = request.args.get('id')
    return users[id]

# {
#    "id": "u03",
#    "first_name": "Rodrigo",
#    "last_name": "Lopez"
# }
@app.route('/new_user', methods=['POST'])
def create_user():
    data = request.json
    users[data["id"]] = {
        "first_name": data["first_name"],
        "last_name": data["last_name"]
    }
    return 'OK', 201

# /update_user?id=u01
# {
#    "first_name": "Rodrigo",
#    "last_name": "Lopez"
# }
@app.route('/update_user', methods=['PUT'])
def update_user():
    id = request.args.get('id')
    data = request.json
    updated_user = users.get(id)
    updated_user.update(data)
    users[id] = updated_user
    return 'OK'

# /update_user?id=u01
@app.route('/delete_user', methods=['DELETE'])
def delete_user():
    id = request.args.get('id')
    users.pop(id)
    return 'OK', 204

@app.route('/humans.txt')
def send_humans():
    return send_file("humans.txt")

@app.route('/cats/<path:catfilename>')
def send_cats(catfilename):
    return send_from_directory("cats", catfilename)

# cats/blur/cat1.jpg
@app.route('/cats/blur/<path:catfilename>')
def send_blurred_cat(catfilename):
    # Image.open("cats/cat1.jpg")
    original_cat = Image.open('cats/' + catfilename)
    blur_cat = original_cat.filter(ImageFilter.BLUR)
    blur_cat.save('cats/blur_' + catfilename)
    return send_file('cats/blur_' + catfilename)

# cats/resize/cat1.jpg?width=300&height=300
@app.route('/cats/resize/<path:catfilename>')
def send_resized_cat(catfilename):
    # Image.open("cats/cat1.jpg")
    original_cat = Image.open('cats/' + catfilename)
    width = int(request.args.get("width"))
    height = int(request.args.get("height"))
    new_size = (width, height)
    resized_cat = original_cat.resize(new_size)
    resized_cat.save('cats/resized_' + catfilename)
    return send_file('cats/resized_' + catfilename)
