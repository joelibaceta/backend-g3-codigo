const { Product } = require('../models')
const { KartItem } = require('../models')

class CatalogController {

    static create(req, res) {
        let productData = req.body

        Product.create(productData)
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static list(req, res) {
        Product.findAll()
            .then((data)=>res.send(data))
            .catch((err) => res.sendStatus(404))
    }

    static listview(req, res) {
        KartItem.findAll()
        .then((kart)=> {
            Product.findAll()
            .then((data)=>{
                res.render(__dirname + "/../views/catalog_list.html", {products: data, kart: kart})
            })
            .catch((err) => {
                console.log(err.message)
                res.sendStatus(404)
            })
        })
        .catch((err) => {
            console.log(err.message)
            res.sendStatus(404)
        })

        
    }

}

module.exports = {CatalogController}