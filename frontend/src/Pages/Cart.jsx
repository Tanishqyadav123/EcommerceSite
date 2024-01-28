import React, { useContext, useEffect, useState } from 'react'
import '../Style/Cart.css'

import cart_cross_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
function Cart() {

  const { all_product ,  cart , RemoveFromCart , GetTotalPrice} = useContext(ShopContext)
  

  const handleRmoveCart = (ProdId) =>{
     
    RemoveFromCart(ProdId)
    
  }


  return (
    <div className='CartSection'>
       
       <div className="innerCartSection">

        <div className="ShopDetails">
          
        <table className='container' style={{marginLeft : "4rem"}}>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
              {
                 all_product.map((elem , index) => {
                    if (cart[elem.productId] > 0){
                      return <tr>
                      <td ><img src={elem.image} alt="" style={{width : "3rem"}} /></td>
                      <td style={{fontSize : "0.9rem"}}>{elem.name}</td>
                      <td>${elem.new_Price}</td>
                      <td>{cart[elem.productId]}</td>
                      <td>{elem.new_Price * cart[elem.productId]}</td>
                      <td><img src={cart_cross_icon} alt="" onClick={() => handleRmoveCart(elem.productId)}/></td>
                      <hr />
                    </tr>
                    
                    }
                 } )
              }
             
           
        </table>

          <div className="TotalSection">

          
             <div className="cartTotal">
                <h3>Cart Totals</h3>
                <div className="subTotal">
                <p>subTotal </p>
                <p>${GetTotalPrice()}</p>
                </div>
                <div className="Shipping">
                <p>Shipping Free </p>
                <p>Free</p>
                </div>
                <div className="Total">
                <h5>Total </h5>
                <h5>${GetTotalPrice()}</h5>
                </div>
                <button className='checkout'>PROCEED TO CHECKOUT</button>
             </div>

             <div className="promoCode">
               <p>If you have a promo code Enter it here</p>
              <div className="promoField">
              <input type="text"  placeholder='promo code'/>
               <button className='btn promobtn'>Submit</button>
              </div>
             </div>
             
        </div>  
        </div>
       </div>
     
    </div>
  )
}

export default Cart
