
const mainModel = require('../models/users')

module.exports = {
    
    registro: async function(req, res, next) {
        let user = new mainModel({
            name:req.body.name,
            user:req.body.user,
            password:req.body.password
        })
        let documento = await user.save()
        res.status(201).json(documento)
    },
    login: async function(req, res, next) {
        console.log("login")
    }
    
}