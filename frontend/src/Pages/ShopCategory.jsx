import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import '../Style/ShopCategory.css'
import Item_card from '../Components/Item_card.jsx/Item_card'
import dropdown_icon from '../assets/dropdown_icon.png'


function ShopCategory({Banner , category }) {
  const {all_product} = useContext(ShopContext)
  
  return (
    <div className='ShopCategorySection'>
       <div className="innerShopCategory container">
           <img src={Banner} alt="" id='banner' />
           
            <div className="shopCategorySort">
               <p> <b>Showing 1 - 12</b> out of 36 Products </p>
               <button className='sortBtn'> Sort by <img src={dropdown_icon} alt="" /> </button>
              </div>           

           <div className="categoryProducts">
             {
               all_product.map((items , index) =>{
                if (category === items.category) {
                  
                  return  <Item_card productId = {items.productId} image = {items.image} name = {items.name} newPrice = {items.new_Price} oldPrice = {items.old_Price}/>
                }
                else {
                   return <></>;
                }         
               
               })
             }
           </div>
       </div>
    </div>
  )
}

export default ShopCategory
