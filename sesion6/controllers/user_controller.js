const bcrypt = require('bcrypt')

const { User } = require ('../models')

class UserController {

    static findOne(req, res) {

        let pk = req.params.id

        User.findByPk(pk)
        .then( (data) => {

            if (data.username == req.user.username) {
                res.send(data)
            } else {
                res.sendStatus(403)
            }
        })
        .catch((err) => {
            res.status(404).send({
                message: err.message
            })
        })
        
    }

    static create(req, res) {

        let payload = req.body

        const salt = bcrypt.genSaltSync(10)
        let newPassword = bcrypt.hashSync(payload.password, salt)

        payload.password=newPassword

        User.create(payload)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

}

module.exports = { UserController }