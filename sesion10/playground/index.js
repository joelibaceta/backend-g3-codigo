const express = require('express')
const mercadopago = require ('mercadopago');

const bodyParser = require('body-parser')

const dotenv = require('dotenv')

const { CatalogController } = require('./controllers/catalog_controller')
const { PaymentController } = require('./controllers/payment_controller')
const { KartController }  = require('./controllers/kart_controller')

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.engine('html', require('ejs').renderFile)
app.set('view_engine', 'html')
//app.set('')

app.get('/success', (req, res) => {
    payment_id = req.query.payment_id
    external_reference = req.query.external_reference
    res.send("Pago exitoso: " + payment_id + " Producto: " + external_reference )
})

app.get('/failure', (req, res) => {
    res.send("Ups, ha ocurrido un error")
})

app.get('/', (req, res) => {

    let preference = {
        items: [
          {
            title: 'Manzana',
            unit_price: 10.0,
            quantity: 1,
          }
        ],
        back_urls: {
            success: 'http://localhost:3000/success',
            pending: 'http://localhost:3000/pending',
            failure: 'http://localhost:3000/failure'
        },
        payment_methods: {
            "excluded_payment_types": [
                {id: "atm"}
            ],
            installments: 3
        },
        external_reference: 'Manzana'
    };

    mercadopago.preferences.create(preference)

    .then(function(response){
        global.id = response.body.id;
        console.log(global.id)
        res.render(__dirname + "/views/catalog.html", {global_id: global.id})
    }).catch(function(error){
        console.log(error);
        res.sendStatus(500)
    });

    
})

app.post('/api/products', CatalogController.create)
app.get('/api/products.json', CatalogController.list)
app.get('/api/products', CatalogController.listview)
app.get('/api/product/:id/buy', PaymentController.startPayment)
app.get('/api/products/congrats', PaymentController.successfulPayment)
app.get('/api/product/:id/addToCart', KartController.create)
app.get('/kart', KartController.list)
app.get('/kart/clear', KartController.clear)
app.listen(3000)

