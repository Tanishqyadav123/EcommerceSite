const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
     productId : {
         type : Number,
     },
     name : {
         type : String,
         required : true
     },
     category : {
         type : String,
         required : true,
     },
     image : {
         type : String,
         required : true
     },
     available : {
         type : Boolean,
         default : true
     },
     new_Price : {
         type : String,
         required : true
     },
     old_Price : {
         type : String,
         required : true
     }
} , {timestamps : true}) 

module.exports = mongoose.model("product" , ProductSchema)