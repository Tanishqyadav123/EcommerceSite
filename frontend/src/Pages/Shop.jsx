import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import handIcon from '../assets/hand_icon.png'
import heroIcon from '../assets/hero_image.png'
import exclusive from '../assets/exclusive_image.png'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import data_product from '../assets/data.js'
function Shop() {
  return (
    <div>
      <Hero headingFour = "New Arrivals Only"  first = "New" iconImg = {handIcon} second = "Collections" third = "For Everyone" heroIcon = {heroIcon} btnText={"Latest Collection"}/>
      <Popular data_product={data_product} title = {"Popular In Women"}/>
      {/* <Offers/> */}
      <Hero first={"Exclusive"}  second={"Offers For You"} headingEnd = {"Only On Best Sellers Products"} heroIcon={exclusive} btnText={"Check Now"}/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
