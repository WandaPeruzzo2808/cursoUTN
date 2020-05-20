const mongoose = require('../bin/mongodb')

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
      name:{
        type:String,
        trim:true,
        required:[true,'El nombre es obligatorio']
    },
      sku: {
        type: String,
        trim: true,
        required: [true,'El sku es obligatorio']
       },
       description: {
          type: String,
          trim: true,
          required: [true,'La descripción es obligatorio']
       },
       price: {
        type: Number,
        trim: true,
        required: [true,'El precio es obligatorio']
       },
       price_sale: {
          type: Number,
          trim: true
       },
       destacado:Number,
       category: {type:Schema.ObjectId, ref:"categories"}
})

module.exports  =  mongoose.model('products', ProductSchema);