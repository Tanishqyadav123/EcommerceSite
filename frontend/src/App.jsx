import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import Men_banner from './assets/banner_mens.png'
import Women_banner from './assets/banner_women.png'
import Kids_banner from './assets/banner_kids.png'
import SingleProduct from './Components/SingleProducts/SingleProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Shop/>} />
          <Route path='/men' element = {<ShopCategory Banner = {Men_banner} category = "men"/>} />
          <Route path='/women' element = {<ShopCategory Banner = {Women_banner} category = "women"/>} />
          <Route path='/kid' element = {<ShopCategory  Banner = {Kids_banner} category = "kid"/>} />
          <Route path='/product' element = {<Product/>} />
          <Route path='/products/:productId' element = {<SingleProduct/>} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='/login' element = {<LoginSignUp />}/>
        </Routes>
        <Footer/>
       </Router>
     </>
  )
}

export default App
