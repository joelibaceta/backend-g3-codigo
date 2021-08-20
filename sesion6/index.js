const express = require('express');
const { HelloController } = require('./controllers/hello_controller')
const myLogger = require('./middlewares/logger_middleware')

const app = express()

//app.use(myLogger);

// callback = (req, res) => { res.send("hello world") }
// app.get('/', callback);

app.get('/', myLogger, HelloController.getHello);
app.get('/hello/:name', HelloController.getHelloByName);
app.use('/img', express.static('assets'))

app.listen(3000)


// function suma(a, b) {
//     return a + b
// }

// f(x, y) = x + y

// f(x) = x * 8

// console.log(suma(1, 1))

// let suma = (a, b) => { return a + b }

// console.log(suma(1, 4))