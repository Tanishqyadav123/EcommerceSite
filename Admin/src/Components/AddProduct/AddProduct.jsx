import React, { useState } from "react";
import "./AddProduct.css";
import upload_area  from '../../assets/upload_area.svg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import all_product from "../../assets/all_product";


function AddProduct() {

   const navigate = useNavigate()
 
  const [image , setImage] = useState(null)
  const [productDetails , setProductDetails] = useState({available : true , image : null})
  const [error ,  setError] = useState("")
   
  const handleChange = (e) =>{
     
     setProductDetails({...productDetails , [e.target.name] : e.target.value})
     console.log(productDetails)
     setError("")
     
  }

  const handleAddProduct = async (e) =>{
     
    e.preventDefault()
   console.log(image.name)    

 
    const formData = new FormData()
    let product;
   
    formData.append("product" , image)

    const res = await axios.post("http://localhost:8080/upload" , formData)
    .then(   (value) =>{
  
          product = productDetails
          product.image = value.data.image_url
    })
    .catch((error) =>{
         console.log(error)
    })

    console.log(product)
    const res1 =  await axios.post("http://localhost:8080/api/product/addproduct" , product)

    .then((value1) =>{
          if (value1.data.success){
             alert('Product added SuccessFully')
          }
         console.log(value1.data)
         navigate("/listproduct")
    })
    .catch((error1) =>{
         console.log(error1.response.data.message)
         setError(error1.response.data.message)
    })


  }


  return (
    <div className="MainAdminSection">
      <div className="innerAdminMainSection container">
        <form action="" className="addProductForm" name="addProductForm">
         <div className="innerfield">
          {error && <span className="error">{error}</span>}
         <h6>Product Title</h6>
          <input onChange={handleChange} type="text" placeholder="Type here" name="name" />
         </div>

          <div className="prices">
            <div className="innerfield">
              <h6>Price</h6>
              <input onChange={handleChange} type="number" placeholder="Type here" name="old_Price" />
            </div>

            <div className="innerfield">
              <h6>Offer Price</h6>
              <input onChange={handleChange} type="number" placeholder="Type here" name="new_Price" />
            </div>
          </div>

         <div className="innerfield">
         <h6>Product Category</h6>
         <select onChange={handleChange} name="category" id="">
            <option value="Select any Value">Select Any Value</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kids</option>

         </select>
         </div>
           
          <div className="innerfield">
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image) : upload_area} className="imageUploader"  alt="" />
           </label>

           <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" id="file-input" hidden />
          </div>
           
           <button className="btn btn-primary" type="submit" onClick={handleAddProduct}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
