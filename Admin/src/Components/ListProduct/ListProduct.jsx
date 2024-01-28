import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import all_product from '../../assets/all_product.js'
import crossIcon from '../../assets/cross_icon.png'
import axios from 'axios'


function ListProduct() {
  let prod = all_product[0];

  const [allProducts , setAllProducts] = useState([])

const getAllProducts = async () =>{
   
  const res = await axios.get("http://localhost:8080/api/product/getallproducts")
  .then((value) =>{
      
     console.log(value.data.AllProducts)
     setAllProducts(value.data.AllProducts)


  })
  .catch((error) =>{
       console.log(error)
  })

}

  useEffect(() =>{
     
    getAllProducts ()


  } , [])


  const handleDeleteProduct = async (productId) =>{
        
    if (confirm("Are you sure you want to delete this product")){
       
   
    // Deleting the data from backend 
     const res = await axios.delete(`http://localhost:8080/api/product/removeproduct/${productId}`)
     .then((value) =>{
         
        console.log(value.data)
        alert("Product deleted SuccessFully")

       
     })
     .catch((error) =>{
         console.log(error)
     })


    //   Now Deleting the data from frontend :-
     
    setAllProducts(allProducts.filter((elem , index) =>{
       
          return elem.productId !== productId

    }))
  }

     
  }
  return (
    <div className='listProductSection'>
       
       <div className="innerProductSection container">
            
             <div className="productheading">
                 <h6>Products</h6>
                 <h6 id='prodName'>Name</h6>
                 <h6>Category</h6>
                 <h6>Old Price</h6>
                 <h6>New Price</h6>
                 <h6>Remove</h6>
             <hr />
             </div>
             {
               allProducts.length > 0 ? 
               allProducts.map((elem , index) =>{
                
                return<>
              
                 <div className="ShowingProd">
                   <h6><img src={elem.image} alt="" /></h6>
                   <h6 id='prodName'>{elem.name}</h6>
                   <h6>{elem.category}</h6>
                   <h6>${elem.old_Price}</h6>
                   <h6>${elem.new_Price}</h6>
                   <h6><img src={crossIcon} onClick={() => handleDeleteProduct(elem.productId)} alt="" id='crossIcon'/></h6>
               </div>
               <hr style={{border : "2px solid gray" , width : "100%"}} />
               </> 
               
              }) : <h1 className='text-center'>No Products are available</h1>
              
            }
          

       </div>

    </div>
  )
}

export default ListProduct
