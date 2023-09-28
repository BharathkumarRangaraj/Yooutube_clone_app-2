import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';
import Commentcontainer from './Commentcontainer';
import Livechat from './Livechat';

const Watchpage = () => {

  const [searchparams]=useSearchParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(closeMenu())

  })
  return (

    <div className='w-full' >
      <div className=' flex '>
      <div className='p-4'>
      <iframe width="1000" 
      height="500" 
      src={"https://www.youtube.com/embed/"+searchparams.get('v') }
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className='bg-slate-200 border border-black w-full h-[500]]'>
      <Livechat/>
    </div>
      </div>
      
    <div>
      <Commentcontainer/>
    </div>

    
    </div>
  )
}

export default Watchpage