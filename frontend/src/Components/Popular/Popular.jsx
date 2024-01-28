import React from 'react'
import './Popular.css'

import Item_card from '../Item_card.jsx/Item_card'
import axios from 'axios'

function Popular({data_product , title}) {

  const getPopularCollection  = async () =>{
       const res = await axios.get("http://localhost:8080/api/product/getpopularcollection")
       .then((value) =>{
           console.log(value.data)
       })
       .catch((error) =>{
           console.log(error.response.data.message)
       })
   } 

  if (data_product){
      // getPopularCollection()
  }
  return (
    <div className='popularSection'>
       <div className="inner_popular">
           <h2 className='heading'>{title}</h2>
           <div className="showItems container">
           {
                 data_product.map((items , index) =>{
                     return <Item_card productId={items.productId} image = {items.image} name = {items.name} newPrice = {items.new_Price} oldPrice = {items.old_Price}/>
                 })
            }
           </div>
       </div>
    </div>
  )
}

export default Popular
