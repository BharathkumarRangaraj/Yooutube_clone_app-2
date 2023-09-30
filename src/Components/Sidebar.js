import React from 'react'
import { useSelector } from 'react-redux'



const Sidebar = () => {
  const ismenuOpens = useSelector((store) => store.app.ismenuopen);
  if (!ismenuOpens) return null;
  return (
    <div className='w-48 bg-white p-2 cursor-pointer py-14'>
      <ul className='py-2'>
        <li className='py-2  hover:bg-slate-300 ' > Home</li>
        <li className='py-2  hover:bg-slate-300'>Shorts</li>

  <li className=' hover:bg-slate-300' >Live videos</li>
      </ul>
      <hr></hr>

      <h1 className='font-bold pt-4'>Subscrption</h1>
      <ul>
        <li className='py-2 w-full hover:bg-slate-300 '>BBC </li>
        <li className='py-2  hover:bg-slate-300 '>national</li>
        <li className='py-2  hover:bg-slate-300 '>AR Rahman</li>
      </ul>
      <hr></hr>
      <h1 className='font-bold pt-4'>Explore</h1>
      <ul>
        <li className='py-2  hover:bg-slate-300 '>Trending </li>
        <li className='py-2  hover:bg-slate-300 '>Shopping</li>
        <li className='py-2  hover:bg-slate-300 '>Movies</li>
      </ul>

    </div>
  )
}

export default Sidebar