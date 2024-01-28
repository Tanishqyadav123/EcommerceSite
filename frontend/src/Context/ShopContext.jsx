import axios from 'axios';
import  React, { createContext, useEffect, useState } from 'react';


export const ShopContext = createContext(null)



const DefaultCart = () =>{
    let cart = {}

   //   Initializing the cart value with 0 
   for(let i = 0; i < 300+1 ; i++){
         cart[i] = 0
   }
   return cart
}




export const ShopContextProvider =  ({children}) =>{

    const [all_product , setAll_product] = useState([])
    const [cart , setCart] = useState(DefaultCart())

 const GetAllProd = async () =>{
    const res = await axios.get("http://localhost:8080/api/product/getallproducts")
    .then((value)=>{
        //  console.log(value.data.AllProducts)
         setAll_product(value.data.AllProducts)
         console.log(value.data)
    })
    .catch((error) =>{
         console.log(error.response.data.message)
    })

    if (localStorage.getItem("auth-token")){
         const res = axios.post("http://localhost:8080/api/cart/getcart" , {'token' : localStorage.getItem("auth-token")})
         .then((value) =>{
             console.log(value.data.cartData)
             setCart(value.data.cartData)
         })
    }

 }
  
    
    useEffect( () =>{
        GetAllProd()
    } , [])
  
 
 
//   UseEffect :- for fetching all the products from backend


console.log(all_product)

    const GetTotalPrice = () =>{
         
        let total = 0;
        all_product.map((elem) =>{
          
            if (cart[elem.productId] > 0){
                 total += cart[elem.productId] * elem.new_Price;
            }
            
        })
        return total
         
    }

    const TotalItemInCart = () =>{
         let totalItem = 0;
         all_product.map((elem) =>{
             if (cart[elem.productId] > 0){
                 totalItem += cart[elem.productId]
             }
         })
         return totalItem
    }
   
    const AddToCart = async (itemId) =>{
         setCart((prev) => ({...prev ,[itemId] : prev[itemId] + 1}))
         console.log({"itemId" : itemId})
        //   API Call for adding the products from cart
         
        if (localStorage.getItem("auth-token")){
             
            const res = await axios.post("http://localhost:8080/api/cart/addToCart" , {'token' : localStorage.getItem("auth-token") , "itemId" : itemId})
            .then((value) =>{
                 console.log(value.data)
            })
            .catch((error) =>{
                 console.log(error)
            })
        }  
    }
    const RemoveFromCart = async (itemId) =>{
         setCart((prev) => ({...prev ,[itemId] : prev[itemId] - 1}))
        
        //   API Call for Removing the products from cart
        if (localStorage.getItem("auth-token")){
             const res = await axios.post("http://localhost:8080/api/cart/removeFromCart" , {'token' : localStorage.getItem("auth-token") , 'itemId' : itemId})
             .then((value) =>{
                 console.log(value.data)
             })
             .catch((error) =>{
                 console.log(error)
             })
        }


    }
    console.log(cart)
    console.log(all_product)
    const contextValue = {all_product , cart , AddToCart , RemoveFromCart , GetTotalPrice , TotalItemInCart}

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
    
}
