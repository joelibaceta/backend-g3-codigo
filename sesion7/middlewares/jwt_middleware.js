const jwt = require('jsonwebtoken')

function authtoken(req, res, next) {
    const headerAuth = req.headers['authorization']
    // Bearer 32f23fsdf...
    if (headerAuth == null) return res.sendStatus(401)

    const token = headerAuth.split(' ')[1]

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.sendStatus(403)

        req.user = user
        next()
    })

}

module.exports = authtoken