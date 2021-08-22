const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {

    let secret = process.env.TOKEN_SECRET

    // Obtener el token de autorizacion
    const headerAuth = req.headers['authorization']
    // Bearer 23f23f2df0323...
    // Validar que el token no sea null
    if (headerAuth == null) return res.sendStatus(401)
    // Extraer el token del header de autorizacion
    const token = headerAuth.split(' ')[1]
    // Verificar el token
    jwt.verify(token, secret, (err, user) => {
        if (err) return res.sendStatus(403)
        // Guardar los datos del token en un parametro
        // adicional del request
        req.user = user
    })

    next()
    
}

module.exports = authenticateToken