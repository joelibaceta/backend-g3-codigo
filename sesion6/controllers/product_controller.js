const { Product } = require('../models')

class ProductController {

    static create(req, res) {
        let payload = req.body
        console.log(payload)

        Product.create(payload)

            .then( (data) => { 
                res.send(data) 
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })

        // newprodct = Product.create(payload)
        // return newproduct 
    }

    static findAll(req, res) {
        Product.findAll()
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findOne(req, res) {
        let pk = req.params.id
        Product.findByPk(pk)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        // PUT product/:id
        let pk = req.params.id
        let payload = req.body

        Product.update(payload, {where: {id: pk} })
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })

    }

    static delete(req, res) {
        let pk = req.params.id
        Product.destroy({ where: {id: pk} })
            .then( (data) => {
                res.status(200).send("DELETED")
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

}

module.exports = { ProductController }