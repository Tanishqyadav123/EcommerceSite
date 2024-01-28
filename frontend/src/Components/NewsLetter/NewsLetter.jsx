import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='NewsLetterSection'>
        <div className="innerNewsSection">
            <h1 className='heading'>Get Exclusive Offers On Your Email</h1> 
             <p className='subheading'>Subscribe to our newsletter and stay updated</p>
             <form action="">
                <input type="text" name="" id="subscribeEmail" placeholder='Your Email Id' />
                 <button className='subscribe'>Subscribe</button>
             </form>
        </div>
    </div>
  )
}

export default NewsLetter
