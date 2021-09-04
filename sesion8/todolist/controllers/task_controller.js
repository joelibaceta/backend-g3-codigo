const {Task} = require('../db')

class TaskController {
    static create(req, res) {
        let data = req.body
        Task.create(data)
        return res.send("OK")
    }
}

module.exports = {TaskController}