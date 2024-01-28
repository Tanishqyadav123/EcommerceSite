import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import insta from '../../assets/instagram_icon.png'
import pinterest from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footerSection'>
          <div className="Innerfooter ">
               <div className="logo">
                  <img src={logo} alt="" />
                  <h2>SHOPPER</h2>
               </div>
               <div className="footerlinks">
                 <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices </li>
                    <li>About</li>
                    <li>Contact</li>
                 </ul>
               </div>
               <div className="footerlinks">
                 <ul>
                    <li><img src={insta} alt=""   /></li>
                    <li><img src={pinterest} alt=""   /></li>
                    <li><img src={whatsapp} alt=""   /></li>
                 </ul>
               <hr style={{border : "1px solid black" , width : "40vw" , marginTop : "2rem"}} />
               <p style={{textAlign :"center"}}>Copyright &copy; | All Right Reserved</p>
               </div>
          </div>
    </div>
  )
}

export default Footer
