const jwt = require("jsonwebtoken")
const userModel = require("../Models/UserModel.js")


const Authentication = async (req , res , next) =>{
     
   try {
    
    const {token} = req.body;
    console.log(token)
    if (!token){
         return res.status(401).json({
             success : false,
             message : "UnAuthorised Access Denied"
         })
    }

    // Otherwise verify the jwt token
    const verified =  jwt.verify(token , process.env.JWT_SECRET)
    req.user = verified
    console.log("Passed")
    next()

   }
   catch (error){
     return res.status(500).json({
        success : false,
        message : error.message
     })
   }


}

module.exports = {Authentication}