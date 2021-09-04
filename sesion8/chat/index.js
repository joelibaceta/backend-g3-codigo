const express = require('express')

const app = express()

const http = require('http')
const server = http.Server(app)

const io = require('socket.io')(server)

app.get('/', function(req, res) {
    res.sendFile( __dirname + "/views/index.html" )
})


io.on("connection", function(socket){
    console.log("conexion abierta")

    socket.on("user_join", function(data){
        this.username = data
        socket.broadcast.emit("user_join", data)
    })

    socket.on("chat_message", function(data){
        socket.broadcast.emit("chat_message", data)
    })

    socket.on("disconnect", function(data){
        socket.broadcast.emit("user_leave", this.username)
    })

    socket.on("is_writting", function(){
        socket.broadcast.emit("is_writting", this.username)
    })

})


server.listen(3000)