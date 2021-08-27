const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { TicketController } = require('./controllers/ticket_controller')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/tickets', TicketController.create)
app.get('/tickets', TicketController.findAll)
app.get('/tickets/search', TicketController.findByName)
app.get('/ticket/:id', TicketController.findById)
app.put('/ticket/:id', TicketController.update)

app.listen(3000, () => {
    console.log("Server running...")
})