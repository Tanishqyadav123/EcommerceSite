const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
     username : {
         type : String,
     },
     email : {
         type : String,
         required : true
     },
     password : {
         type : String,
         required : true
     },
     cartData : {
        type : Object
        
     }
}, {timestamps : true})


module.exports = mongoose.model ('user' , UserSchema)