const express = require('express')
const cors = require('cors')
const app = express()

const inventarioRouter = require('./routes/inventarioRoutes')

app.use(cors())
app.use(express.json())

app.get('/', (req, res, next) => {
    res.json({
        message: "Qué hubo vé?"
    })
})

// RUTAS
app.use('/api/v1/inventario', inventarioRouter)

module.exports = app