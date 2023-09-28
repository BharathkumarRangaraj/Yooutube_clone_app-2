import React, { useEffect } from 'react';
import Chatmessages from './ChatMessages';
import { useDispatch, useSelector } from 'react-redux';
import { addmessages } from '../utils/chatslice';
import randomnamegenerate, { generateName } from '../utils/Helper';

const Livechat=()=>{
    const dispatch=useDispatch();
    const chatmessages=useSelector(store=>store.chat.messages)
useEffect(()=>{
    const i=setInterval(() => {
        console.log('hey');
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
        <div className=' w-full h-[500] ml-2 w-full h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
            
         {
            chatmessages.map((c,i)=>{
                return <Chatmessages key={i} name={c.name} msg={c.message}/>
            })
         }
            
        </div>
        </div>
    )
}
export default Livechat;