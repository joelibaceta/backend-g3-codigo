const bcrypt = require('bcrypt')
const { UserModel } = require('../db')

class UserController {

    static signup(req, res) {
        let username = req.body.username
        let password = req.body.password

        bcrypt.genSalt(15, (err, salt) => {

            bcrypt.hash(password, salt, (err, hash) => {

                console.log(hash)

                let newUser = new UserModel({
                    "username": username,
                    "password": hash
                })
                
                newUser.save(err => {
                    if(err) {
                        res.send(err.message)
                    } else {
                        res.send("el usuario se ha registrado con exito.")
                    }
                })
                
            })
        })


    }

}

module.exports = {UserController}