const userModel = require("../Models/UserModel.js")


const AddToCart = async (req , res) =>{
  
     try{
           
    const {itemId} = req.body
    const {id} = req.user
    
    //  Find the user using the id :-
    const user = await userModel.findById(id)
    console.log(user)
    user.cartData[itemId] += 1;
    await userModel.findByIdAndUpdate(id , {cartData : user.cartData} , {new : true})
    res.status(200).json({
         success : true,
         message : "Added To Cart Successfully"
    })
     }
     catch (error){
         return res.status(500).json({
             success : false,
             message : error.message
         })
     }
     
}



const RemoveFromCart = async (req , res) =>{
    
     try {
         const {itemId} = req.body;
         const {id} = req.user;

         const user = await userModel.findById(id)
         if (user.cartData[itemId] > 0){
             
            user.cartData[itemId] -= 1;

         }   
         
        //   Now update the user
        await userModel.findByIdAndUpdate(id , {cartData : user.cartData} , {new : true})

        res.status(200).json({
            success : true,
            message : "Removed from Cart Successfully"
       })
        }
        catch (error){
            return res.status(500).json({
                success : false,
                message : error.message
            })
        }

}


const getCart = async (req , res) =>{
    
    console.log("Get Cart")
     const {id} = req.user

     const user = await userModel.findById(id)
     res.json({
         success : true,
         cartData : user.cartData
     })
}

module.exports = {AddToCart , RemoveFromCart , getCart}