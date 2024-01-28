import React from 'react'
import './Admin.css'
import SideBar from '../../Components/SideBar/SideBar'
import MainAdmin from '../../Components/MainAdmin/MainAdmin'
import {Routes , Route} from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
function Admin() {
  return (
    <div className='adminSection'>
       
       <div className="innerAdminSection ">
          <SideBar/>
          <Routes >
             <Route path='/addproduct' element = {<AddProduct/>} />
             <Route path='/listproduct' element = {<ListProduct/>} />
          </Routes>
          <MainAdmin/>
       </div>
        
    </div>
  )
}

export default Admin
