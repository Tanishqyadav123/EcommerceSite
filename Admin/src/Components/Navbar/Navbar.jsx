import React from 'react'
import Navlogo from '../../assets/nav-logo.svg'
import NavProfile from '../../assets/nav-profile.svg'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbarSection'>

        <div className="innerNavbarsection">
               
               <img className='logo' src={Navlogo} alt="" />
               <img className='profileImage' src={NavProfile} alt="" />

        </div>
      
    </div>
  )
}

export default Navbar
