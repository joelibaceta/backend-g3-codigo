const { KartItem } = require('../models')
const { Product } = require('../models')

const mercadopago = require ('mercadopago');

class KartController {

    // product/:id/addToCart
    static create(req, res) {
        let productId = req.params.id

        KartItem.findOne({where: {productId: productId}})
            .then((data) => {
                let new_quantity = data.quantity + 1
                KartItem.update({quantity: new_quantity}, {where: {id: data.id}})
                    .then((data)=>{
                        res.redirect('/api/products')
                    })
                    .catch((err)=>{ res.sendStatus(500)})
            })
            .catch((err) => {
                KartItem.create({
                    productId: productId,
                    quantity: 1
                })
                .then((data)=>{
                    res.redirect('/api/products')
                })
                .catch((err)=>{ res.sendStatus(500)})
            })
    }

    static list(req, res) {
        mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN
        });

        
        KartItem.findAll({
            include: {
                model: Product, as: 'product'
            }
        })
        .then((kart)=> {

              

            let total = 0

            kart.forEach((item) =>{
                total = total + (item.quantity * item.product.price)
            })

            let preference = {
                items: [{
                    title: "Venta Telefonos",
                    unit_price: total,
                    quantity: 1,
                  }],
                back_urls: {
                    success: 'http://localhost:3000/kart/clear'
                }
            }
        
            mercadopago.preferences.create(preference)
            .then(function(data){
                console.log(data)
                let preference_id = data.response.id
                res.render(__dirname + "/../views/kart.html", {
                    kart: kart,
                    total: total,
                    preference_id: preference_id
                })
            }).catch(function(error){
                console.log(error);
                res.sendStatus(500)
            });
            
        })
        .catch((err) => res.sendStatus(404))
    }

    static clear(req, res) {
        KartItem.destroy({where: {}, truncate: true})
            .then((data)=>{
                res.redirect('/api/products')
            }).catch(function(error){
                console.log(error);
                res.sendStatus(500)
            })
    }
}

module.exports = { KartController }