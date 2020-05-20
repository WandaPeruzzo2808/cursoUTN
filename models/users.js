const mongoose = require('../bin/mongodb')

const Schema = mongoose.Schema;

const mainSchema = new Schema({
    name:String,
    user:String,
    password:String
})

module.exports  =  mongoose.model('users', mainSchema);