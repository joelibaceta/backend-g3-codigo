const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    },
    saleBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

const TicketModel = mongoose.model('ticket', TicketSchema)

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {

        type: String,
        required: true
    }
})

UserSchema.statics.authenticate = function( username, password, callback ) {
    UserModel.findOne({username: username})
        .exec((err, user) => {
            if(err) {
                callback(err)
            } else {
                bcrypt.compare(password, user.password, (err, result) => {
                    if ( result == true ) {
                        return callback(err, user)
                    } else {
                        let err = new Error("Wrong password")
                        err.status = 401
                        callback(err)
                    }
                })
            }
        })
}

const UserModel = mongoose.model('user', UserSchema)

module.exports = { TicketModel, UserModel }