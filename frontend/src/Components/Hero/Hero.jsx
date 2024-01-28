import React from 'react'


import './Hero.css'

import ArrowButton from '../ArrowButton/ArrowButton'
function Hero({headingFour , first , second  , third , iconImg , heroIcon , headingEnd , btnText}) {
  return (
    <div className='hero_container'>
         <div className="Inner_Hero container">
            <div className="lefthero" >
                <h4>{headingFour}</h4>
                <div>
                <h1>{first} <img src={iconImg} alt="" style={{width : "4rem"}} /></h1>
                <h1>{second}</h1>
                <h1>{third}</h1>
                </div>
                {headingEnd ?  <h4>{headingEnd}</h4> : null}
                <ArrowButton btnText = {btnText}/>
            </div>
            <div className="righthero">
                <img src={heroIcon} alt="" height={"80%"}/>
            </div>
           
         </div>
    </div>
  )
}

export default Hero
