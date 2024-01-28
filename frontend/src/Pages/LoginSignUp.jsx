import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/LoginPage.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginSignUp() {
  const navigate = useNavigate()
  const [page, setPage] = useState("login");
  const [UserDetails, setuserDetails] = useState({});
  const [error , setError] = useState("")

  const handleChange = (e) => {
    setuserDetails({ ...UserDetails, [e.target.name]: e.target.value });
  };

  const SignUp = async () => {
    console.log("Sign up is call");

    const res = await axios.post ('http://localhost:8080/api/user/signUp' , UserDetails)
    .then((value) =>{
        console.log(value.data)
        localStorage.setItem("auth-token" , value.data.token)
        navigate("/")
    })
    .catch((error) =>{
       console.log(error.response.data.message)
       setError(error.response.data.message)
    })

    

  };

  const Login = async () => {
    console.log("Login is call");
     
    const res = await axios.post ("http://localhost:8080/api/user/login" , UserDetails)
    .then((value) =>{
       console.log(value.data.token)
       localStorage.setItem("auth-token" , value.data.token)
       navigate("/")
    })
    .catch((error) =>{
       console.log(error.response.data.message)
       setError(error.response.data.message)
    })


  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserDetails);

    if (page === "SignUp") {
      //  Sign Up
      SignUp();
    } else {
      // Login
      Login();
    }
  };

  return (
    <div className="loginPageSection">
      <div className="innerLoginPage ">
        <h3>{page}</h3>
        {error ? <span className="error">{error}</span> : null}
        <form action="" id="loginForm" onSubmit={handleSubmit}  >
          {page === "SignUp" ? (
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Your Password"
          />
          <button type="submit" className="loginBtn">
            Continue
          </button>
          {page === "SignUp" ? (
            <p>
              Already have an Account?{" "}
              <Link onClick={() => setPage("login")}>Login here</Link>{" "}
            </p>
          ) : (
            <p>
              Create an Account{" "}
              <Link onClick={() => setPage("SignUp")}>SignUp here</Link>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginSignUp;
