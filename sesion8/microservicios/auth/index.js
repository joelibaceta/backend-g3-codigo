const express = require('express')

const bodyParser =require('body-parser')

const { UserController } = require('./controllers/user_controller')
const { AuthController } = require('./controllers/auth_controller')

const app = express()

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
    res.send("pong")
})

app.post('/auth', AuthController.auth)
app.post('/signup', UserController.create)
app.get('/validate', AuthController.validate)

app.listen(3000)