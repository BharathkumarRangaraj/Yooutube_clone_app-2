import React, { useEffect, useState } from 'react';
import Chatmessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addmessages } from '../utils/chatslice';
import randomnamegenerate, { generateName } from '../utils/Helper';

const Livechat=()=>{
    const dispatch=useDispatch();
    const chatmessages=useSelector(store=>store.chat.messages)
    const[livemessage,setlivemessage]=useState('')
useEffect(()=>{
    const i=setInterval(() => {
        
        dispatch(
            addmessages({
                name:generateName(),
                message:randomnamegenerate(20)
            })
        )
    }, 2000);

    return ()=>clearInterval(i);

},[])


    return(
        <div>
<h1 className='font-bold'>Live Chat Messages</h1>
        <div className=' ml-2 w-full h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
            
         {
            chatmessages.map((c,i)=>{
                return <Chatmessages key={i} name={c.name} msg={c.message}/>
            })
         }
            
        </div>
        <form className='border border-black w-full' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addmessages({
                name:'new user',
                message:livemessage,
            }))
            setlivemessage('')
        }}>
            <input value={livemessage} onChange={(e)=>setlivemessage(e.target.value)}  className='w-[250px]' type='text' placeholder='enter your commments'/>
            <button  className='align-center font-bold '>Send</button>

        </form>
        </div>
        
    )
}
export default Livechat;