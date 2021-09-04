const bcrypt = require('bcrypt')

const { User } = require('../models')

class UserController {

    static create(req, res) {
        let userData = req.body

        let salt = bcrypt.genSaltSync(12)
        let newPassword = bcrypt.hashSync(userData.password, salt)

        userData.password = newPassword

        User.create(userData)
            .then((data)=>{
                res.send(data)
            })
            .catch((err)=>{
                res.status(400).send({
                    message: err.message
                })
            })
    }

}

module.exports = { UserController }