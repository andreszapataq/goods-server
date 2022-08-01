const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventarioSchema = new Schema({
    category: String,
    quantity: Number,
    stocked: Boolean,
    name: String
})

const Inventario = mongoose.model('Inventarios', inventarioSchema)

module.exports = Inventario