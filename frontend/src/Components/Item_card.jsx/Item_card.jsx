import React, { useEffect, useState } from 'react'
import './Item_card.css'
import { Link } from 'react-router-dom'

function Item_card({productId , image , name , oldPrice , newPrice}) {
 
   const[img , setImg] = useState(image)

  return (
    <div>
      <Link to={`/products/${productId}`} style={{textDecoration : "none"}}>
      <div class="card"  style={{width : "18rem" , border : "none"}} >
          <div class="card-body">
                <img src={img} alt=""  onClick={window.scrollTo(0,0) } style={{objectFit : "cover" , width : "100%"}}/>
                <p class="card-text">{name}</p>
                <div className='amount'>
                <p >${newPrice}</p>
                <p className='old' > ${oldPrice}</p>
                </div>
          </div>
       </div> 
      </Link>
    </div>
  )
}

export default Item_card
