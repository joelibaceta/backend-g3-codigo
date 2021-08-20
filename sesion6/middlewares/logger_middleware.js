
// Middleware para logeo de requests
function myLogger(req, res, next) {
    // Imprimir log
    console.log(`Request ${req.method} ${req.path}`)
    next()
}

// Exportar modulo contener de funciones
module.exports = myLogger