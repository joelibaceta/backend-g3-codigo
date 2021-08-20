class HelloController {

    static getHello(req, res) {
        res.send("hello world") 
    }

    static getHelloByName(req, res) {
        let name = req.params.name
        if (name == "Luis") {
            res.status(401).send('Ahorita no joven')
        } else {
            res.send(`hello ${name}`)
        }
        
    }

}

module.exports = { HelloController }