const {TicketModel} = require('../db')

class TicketController {

    static create(req, res) {
        // Crear un ticket nuevo
        // Obtener el payload de creacion
        let data = req.body
        // Uso el metodo create del ODM
        TicketModel.create(data)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static findAll(req, res) {
        // Usamos el metodo find del ODM
        // sin parametros para obtener todos los registros

        TicketModel.find({}, function(err, tickets) {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(tickets)
            }
        })
             
    }

    static findByName(req, res) {
        // Usar la coleccion query
        // como fuente de datos de
        // la consulta
        var query = TicketModel.find(req.query)

        query.select('buyerName price')
        // query.limit(5)
        // query.sort({price: -1})
        // query.where('price').gt(100).lt(300)

        query.exec(function (err, tickets) {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(tickets)
            }
        })
    }

    // /ticket/:id
    static findById(req, res) {
        let pk = req.params.id
        let query = TicketModel.findById(pk)

        query.exec(function(err, ticket){
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(ticket)
            }
        })
    }

    static update(req, res) {
        let payload = req.body
        let pk = req.params.id

        // Actualizar el documento a partir de un id
        // usando el ODM
        let query = TicketModel.findByIdAndUpdate(pk, payload)
        // TicketModel.findOne

        query.exec(function(err, ticket){
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(ticket)
            }
        })
    }



}

module.exports = {TicketController}