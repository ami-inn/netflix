import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>

    <div className="content">
        <h1 className="title">Movie Name</h1>

         <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
         </div>

         <h1 className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h1>

    </div>

    <div className="fade-bottom"></div>
     
      
    </div>
  )
}

export default Banner
