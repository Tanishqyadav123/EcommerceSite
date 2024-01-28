import React, { useEffect, useState } from 'react'
import './NewCollection.css'

import Item_card from '../Item_card.jsx/Item_card'
import axios from 'axios'
function NewCollection() {

 const [new_collections , setNewCollection] = useState([])

const fetchNewCollection = async () =>{
   console.log("getitng")
   const res = await axios.get("http://localhost:8080/api/product/getnewcollection")
   .then((value) =>{
     setNewCollection(value.data.newProducts)
     console.log(value.data)
   })
   .catch((error) =>{
       console.log(error.response)
   })

}

 useEffect(()=>{
   fetchNewCollection()
 } , [])

  return (
    <div className='collectionSection container'>
       <div className="innerCollection"> 
              <h2>NEW COLLECTIONS</h2>
              <div className="CollectionItems">
                {
                     new_collections.map((items, index) =>{
                         return  <Item_card productId={items.productId} image = {items.image} name = {items.name} newPrice = {items.new_Price} oldPrice = {items.old_Price}/>
                     })
                }
              </div>
       </div>
    </div>
  )
}

export default NewCollection
