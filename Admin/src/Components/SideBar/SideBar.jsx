import React from 'react'
import './SideBar.css'
import Addproduct from '../../assets/Product_Cart.svg'
import ProductList from '../../assets/Product_list_icon.svg'
import {Link} from 'react-router-dom'
function SideBar() {
  return (
    <div className='sideBarSection'>
       <div className="innerSideBarSection">

                <div className="addProduct">
                     <img src={Addproduct} alt="" />    
                     <Link style={{textDecoration : "none" , color : "black"}} to='/addproduct' ><h6>Add Product</h6></Link>
                </div>  
                <div className="addProduct">
                <img src={ProductList} alt="" />    
                <Link style={{textDecoration : "none" , color : "black"}} to='/listproduct' ><h6>Product List</h6></Link>
                </div>  
       </div>
    </div>
  )
}

export default SideBar
