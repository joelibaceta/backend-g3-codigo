const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const {TaskController} = require('./controllers/task_controller')

dotenv.config()

const app = express()

app.use(bodyParser.json())


app.get('/', function(req, res){
    return res.sendFile(__dirname + "/views/index.html")
})

app.post('/tasks', TaskController.create)

app.listen(3000)