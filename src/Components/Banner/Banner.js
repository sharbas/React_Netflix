import React,{useEffect,useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data.results[0]);
  
  setMovie(response.data.results[0])
})
  },[])
  return (
    
    <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:''}</h1>
           <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
           </div>
           <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h1>
        </div>
        <div className="fade_bottom"></div>
      
    </div>
  ) 
}

export default Banner
