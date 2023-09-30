import React, { useEffect, useState } from 'react'
import youtubevideoapi from '../utils/const';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Videocontainer = () => {

  const[video,setVideo]=useState([]);

  useEffect(()=>{
    getapidata();
  },[]);
  
  const getapidata= async()=>{
    const data=await fetch(youtubevideoapi);
    const json=await data.json();
    console.log(json)
    setVideo(json.items);
    
  }
  return (
<div>
    <div className='flex flex-wrap py-10 '>
      
      {video.map((video)=>{
        return (video.length===0)?<Shimmer/>:(
          <div>
     
      <Link key={video.id} to={'/watch?v='+video.id}>
      <Videocard  info={video}/></Link>
      </div>
      )})

 }
    

    </div>
    </div>
  )
}

export default Videocontainer