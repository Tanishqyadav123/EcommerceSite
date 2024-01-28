const ProductModel = require("../Models/ProductModel.js")

const AddProduct = async (req , res) =>{
     
    try{
         const { name , new_Price , old_Price , available , category , image} = req.body
               
          console.log(req.body)
         if ( !name || !new_Price || !old_Price || !available || !category){
               return res.status(400).json({
                  success : false,
                  message : "Please fill all the fields"
               })
         } 

        //  Generating the productId automatically :-
        let productId;
        const ProductArray = await ProductModel.find()
        if (ProductArray.length > 0) {
          const lastProduct = ProductArray[ProductArray.length - 1];
          productId = lastProduct.productId + 1
             
        } 
        else {
            productId  = 1;
        }     
         // Otherwise we will create the product using the above details :-
         const createdProduct = await ProductModel.create({...req.body , productId : productId});
         if (!createdProduct){
             return res.status(400).json({
                 success : false,
                 message : "Product could not be created"
             })
         }

         res.status(200).json({
             success : true,
             createdProduct
         })
    }
    catch (error){
         return res.status(500).json({
             success : false,
             message : error.message
         })
    }
    
}


//  Creating a function to remove the element from the database :-
const RemoveProduct = async (req , res) =>{
     
   try {
      const {productId} = req.params
 
       if (!productId){
          return res.status(400).json({
             success : false,
             message : "Product Id is not provided"
          })
       }

     const DeletedProd = await ProductModel.findOneAndDelete({productId : productId} , {new : true})

     if (!DeletedProd){
         return res.status(400).json({
            success : false,
            message : "Product could not be deleted"
         })
     }

     res.status(200).json({
        success : true,
        message : "Product get deleted successfully",
        DeletedProd
     })
     
   }
   catch (error){
      res.status(500).json({
        success : false,
        message : error.message
        
     })
   }

}


//  Getting all the products in the database :-

const GetAllProducts = async (req , res) =>{
     
     try {
         
        const AllProducts = await ProductModel.find();
        if (!AllProducts){
             return res.status(400).json({
                 succes : true,
                 message : "no product found in database"
             })
        }

        res.status(200).json({
             success : true,
             message : "All Products ",
             AllProducts
        })

     }
     catch (error){
          
         res.status(500).json({
             success : false,
             message : error.message
         })

     }

}


//  Get New Collection :-
const NewCollection = async (req , res) =>{
     
     try {
        
         const AllProducts = await ProductModel.find()
         if (!AllProducts){
             return res.status(400).json({
                 success : false,
                 message : "Products can not be fetched "
             })
         }

         return res.status(200).json({
             success : true,
             newProducts : AllProducts.splice(-8)


         })

     }
     catch (error){
            return res.status(500).json({
             success : false,
             message : error.message

         })
     }


}
 

// Create Popular in women :-

const Popular = async(req , res) =>{
     try {
         const PopularProducts = await ProductModel.find()
         if (!PopularProducts){
            return res.status(400).json({
                success : false,
                message : "Products can not be fetched "
            })
        }
        return res.status(200).json({
            success : true,
            PopularProd : PopularProducts.splice(0 , 4)


        })

     }
     catch (error){
         return res.status(500).json({
             success : false,
             message : error.message
         })
     }
}



module.exports = {AddProduct , RemoveProduct , GetAllProducts , NewCollection , Popular}