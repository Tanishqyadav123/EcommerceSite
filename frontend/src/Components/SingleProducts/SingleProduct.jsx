import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";
import "./SingleProduct.css";
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import BreadCbum from "../BreadCbum/BreadCbum.jsx";
import Popular from "../Popular/Popular.jsx";
import '../../Components/ArrowButton/ArrowButton.css'


function SingleProduct() {
  const { all_product , AddToCart } = useContext(ShopContext);

  const [relatedProducts , setRelatedProducts] = useState([])
  const { productId } = useParams();
  const [Product , setProduct] = useState({})
  const sizeArray = ['S' , 'M' , 'L' , 'XL' , 'XXL']

  useEffect(() => {
    
  

    setProduct(() => all_product.find((item) => {

        if (item.productId === +productId) {
          
             return item
        }
      }))
      setRelatedProducts(() => all_product.filter((item) => {
        if (item.category === Product.category) {
            // console.log(item)
             return item
        }
      }))
     

  }, [Product , productId]);


  const handleClick = (itemId) =>{
     
    AddToCart(itemId)
    

  }
 
//   console.log(Product);
//   console.log(`../../..${Product.image}`)
  return (
    <div className="singleProductSection">
      <div style={{marginTop : "2rem" , marginLeft : "5rem"}}>
      <BreadCbum Product = {Product} />
      </div>
      <div className="innerSingleProduct container">
        <div className="left">
          <div className="sideImages">
      
            <img src={Product.image} alt="" />
            <img src={Product.image}  alt="" />
            <img src={Product.image} alt="" />
            <img src={Product.image} alt="" />
          </div>
          <img src={Product.image} alt="" />
        </div>
        <div className="right">
            <h2>{Product.name}</h2>
            <div className="stars">
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star} alt="" /></span>
                <span><img src={star_dull} alt="" /></span>
                <span style={{color : "gray"}}>(122)</span>
            </div>
            <div className="prices">
                <span id="old">${Product.old_Price}</span>
                <span>${Product.new_Price}</span>
            </div>
           <div className="desc">
           <span>A Lightweighted usually knitted pullover shirt close-fitting and with a round neckline </span>
            <span>and short sleeves worn an undershirt of outer garment</span>
           </div>
           
           <div className="Size">
            <h5>Select Size</h5>
              {
                sizeArray.map((item , index) =>{
                     return <button className="btn my-4 mx-2" >{item}</button>
                })
              }
           </div>

           <button className="latest" onClick={() => handleClick(Product.productId)}>
           Add To Cart
         </button>

           <div className="category">
              <h6 className="mx-2">Category : </h6>
               <p>Women,</p>
               <p>T-shirt,</p>
               <p >Crop Top</p>
           </div>
           <div className="category">
              <h6 className="mx-2">Tags : </h6>
               <p>Modern,</p>
               <p >Latest</p>
           </div>
        </div>
        
      </div>
        <Popular data_product={relatedProducts.splice(0 , 4)} title={"Related Products"}/>
    </div>
  );
}

export default SingleProduct;
