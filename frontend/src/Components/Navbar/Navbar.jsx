import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart_icon.png";
import { Link , useNavigate} from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";
function Navbar() {
  const [link, setLink] = useState("Shop");
  const { TotalItemInCart} = useContext(ShopContext)
  const navigate = useNavigate()
  const [CartData , setCartData] = useState(cart)

  const GetAuthUser = async() =>{
     
    const res = await axios.post('http://localhost:8080/api/user/getauthuser' , {'token' : localStorage.getItem("auth-token")})
    .then((value) =>{
       console.log(value.data.AuthUser.cartData)
       setCartData(value.data.AuthUser.cartData)
    })
    .catch((error) =>{
        console.log(error)
    })

 }

 useEffect(() =>{
    GetAuthUser()
 } , [])


  return (
    <div className="navbar-section">
      <div className="inner_navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Shopper</h1>
        </div>
        <div className="navlinks">
          <ul className="links">
            <li onClick={() => setLink("Shop")}>
              {" "}
              <Link style={{ color: "black", textDecoration: "none" }} to="/">
                Shop
              </Link>{" "}
              {link === "Shop" ? <hr className="navHr" /> : null}{" "}
            </li>
            <li onClick={() => setLink("Men")}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/men"
              >
                Men
              </Link>{" "}
              {link === "Men" ? <hr className="navHr" /> : null}
            </li>
            <li onClick={() => setLink("Women")}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/women"
              >
                Women
              </Link>{" "}
              {link === "Women" ? <hr className="navHr" /> : null}
            </li>
            <li onClick={() => setLink("Kids")}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to="/kid"
              >
                Kids
              </Link>{" "}
              {link === "Kids" ? <hr className="navHr" /> : null}
            </li>
          </ul>
        </div>
        <div className="loginAndCart">
          <button className="btn">
           {
             localStorage.getItem("auth-token") ?  <Link
             style={{ color: "black", textDecoration: "none" }}
             to="/login"
             onClick={() => {localStorage.removeItem("auth-token");   navigate("/login"); window.location.reload(true); }}
           >
             logout
           </Link> :  <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
           }
          </button>
          <Link style={{ color: "black", textDecoration: "none" }} to="/cart">
            {" "}
            <img src={cart} alt="" />
          </Link>
          <div className="cart_counter">{TotalItemInCart()}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
