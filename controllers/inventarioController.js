const Inventario = require('../models/inventarioModel')

exports.getInventario = async (req, res) => {
    const inventario = await Inventario.find({})
    res.status(200).json({
        status: "Success",
        data: inventario
    })
}