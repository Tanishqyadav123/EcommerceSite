import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'
import dropdown_icon from '../../assets/dropdown_icon.png'
function BreadCbum({Product}) {

  return (
    <div className='bread'>
         <div className="innerbread">
            <p>HOME <img src={dropdown_icon} alt="" style={{rotate : "270deg" , width : "10px"}}/> SHOP <img src={dropdown_icon} style={{rotate : "270deg" , width : "10px"}} alt="" /> {Product.category} <img src={dropdown_icon} style={{rotate : "270deg" , width : "10px"}} alt="" /> {Product.name}  </p>
         </div>
    </div>
  )
}

export default BreadCbum
