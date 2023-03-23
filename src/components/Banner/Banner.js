import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'
import { RiAddFill, RiPlayFill } from "react-icons/ri";

function Banner() {

  const [movie,setMovie] = useState()

  useEffect(() => {

    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      let rN= Math.floor(Math.random()*20);
      console.log(response.data.results[rN])
      setMovie(response.data.results[rN])
    })
    
  }, [])
  
  


  return (
    <div className='banner' style={{backgroundImage:` url(${ movie ?imageUrl+movie.backdrop_path:""}) `
    }}>

     <div className="banner-sec-1">
        <h4>NETFLIX <span>ORIGINALS</span> </h4>
        <h1>{movie? movie.name||movie.title:''}</h1>
        <p>
          {movie?movie.overview:''}
        </p>
        <div className="btns">
          <button> <RiPlayFill className="icon" /> Play</button>
          <button> <RiAddFill className="icon"/> List</button>
        </div>
      </div>
      <div className="banner-sec-2"></div>
    </div>
     
      
  
  )
}

export default Banner
