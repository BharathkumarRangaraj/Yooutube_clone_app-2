import React from 'react'
import { useSelector } from 'react-redux'



const Sidebar = () => {
  const ismenuOpens = useSelector((store) => store.app.ismenuopen);
  if (!ismenuOpens) return null;
  return (
    <div className='w-48 bg-white p-2'>
      <ul>
        <li> Home</li>
        <li>Shorts</li>

  <li>Subscription</li>
      </ul>

      <h1 className='font-bold pt-4'>Subscrption</h1>
      <ul>
        <li>BBC </li>
        <li>national</li>
        <li>AR Rahman</li>
      </ul>

      <h1 className='font-bold pt-4'>Explore</h1>
      <ul>
        <li>Trending </li>
        <li>Shopping</li>
        <li>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar