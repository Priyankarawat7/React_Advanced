import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

function CollectionCard({item}) {
    const dispatch=useDispatch()

    const removetoCollection=()=>{
        dispatch(removeCollection(item))
        dispatch(removeToast())

    }
    // console.log(item);
    
  return (
    <div className='w-[18vw] min-w-[220px] relative h-80  rounded-xl overflow-hidden group bg-gray-900 '>
      <a target='_blank' href={item.url} className='h-full'>
          {item.type=='photo'?<img className='h-full w-full object-cover object-center' src={item.src}  />:''}
        {item.type=='video'?<video className='h-full w-full object-cover object-cente' autoPlay loop muted src={item.src}/>:''}
        {item.type=='gif'?<img className='h-full w-full object-cover object-cente' src={item.src}/>:''}
      </a>
      <div>
        <div id='bottom' className='flex justify-between gap-3 items-center  w-full py-6 px-10 absolute bottom-0 text-white '>
            <h2 className='text-xl font-semibold'>{item.title}</h2>
            <button onClick={()=>{
              console.log("Remove CLICKED");
              removetoCollection(item)
             // addtocollection(item) 
            }}
             className=' mt-5 py-1 px-5 rounded-2xl font-medium bg-white text-gray-900 cursor-pointer active:scale-95 '>Remove</button>
            </div> 
      </div>
      
       
      
    </div>
  )
}

export default CollectionCard
