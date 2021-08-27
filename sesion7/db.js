const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/booking', {useNewUrlParser: true })


var TicketSchema = mongoose.Schema({
    buyerName: {
        type: String,
        required: true
    },
    playName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    }
})

const TicketModel = mongoose.model('ticket', TicketSchema)

module.exports = { TicketModel }