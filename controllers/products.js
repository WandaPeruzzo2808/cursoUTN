
const mainModel = require('../models/products')

module.exports = {
    getAll: async function(req, res, next) {
        let documento = await mainModel.find({})
        console.log(documento)
        res.status(200).json(documento);
      
    },
    getDestacados: async function(req, res, next) {
        let documento = await mainModel.find({destacado:1})
        res.status(200).json(documento);
      
    },
    getById: async function(req, res, next) {
        let documento = await mainModel.findById(req.params.id)
        res.status(200).json(documento);
      
    },
    create: async function(req, res, next) {
        let products = new mainModel({
            name: req.body.name, 
            description:req.body.description,
            sku: req.body.sku, 
            price: req.body.price,
            price_sale: req.body.price_sale, 
            category:req.body.category
        })
        let documento = await products.save()
        res.status(201).json(documento)
    },
    delete: async function(req, res, next) {
        let documento = await mainModel.deleteOne({ _id: req.params.id })
        res.status(201).json(documento)

    },
    update: async function(req, res, next) {
        
        let documento = await mainModel.update({ _id: req.params.id}, req.body, { multi: false })

        res.status(201).json(documento)
    }
}