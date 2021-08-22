const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

const { HelloController } = require('./controllers/hello_controller')
const { ProductController } = require('./controllers/product_controller')
const { CategoryController } = require('./controllers/category_controller')
const { AuthController } = require('./controllers/auth_controller')
const { UserController } = require('./controllers/user_controller')

const myLogger = require('./middlewares/logger_middleware')
const jwt_middleware = require('./middlewares/jwt_middleware')

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.use(myLogger);

// callback = (req, res) => { res.send("hello world") }
// app.get('/', callback);

// app.get('/', myLogger, HelloController.getHello);
app.get('/hello/:name', HelloController.getHelloByName);
app.use('/img', express.static('assets'))

app.post('/products', jwt_middleware, ProductController.create)
app.get('/products', ProductController.findAll)
app.get('/product/:id', ProductController.findOne)
app.put('/product/:id', jwt_middleware, ProductController.update)
app.delete('/product/:id', jwt_middleware, ProductController.delete)

app.post('/categories', jwt_middleware, CategoryController.create)
app.get('/categories', CategoryController.findAll)
app.put('/category/:id', jwt_middleware, CategoryController.update)
app.get('/category/:id', CategoryController.findOne)

app.get('/category/:id/products', CategoryController.findProductsByCategory)

app.post('/auth', AuthController.auth)

app.post('/users', UserController.create)
app.get('/user/:id', jwt_middleware, UserController.findOne)

app.listen(3000)


// function suma(a, b) {
//     return a + b
// }

// f(x, y) = x + y

// f(x) = x * 8

// console.log(suma(1, 1))

// let suma = (a, b) => { return a + b }

// console.log(suma(1, 4))