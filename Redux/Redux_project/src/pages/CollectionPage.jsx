import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

function CollectionPage({item}) {
  const collection =useSelector((state)=>state.collection.items)

   const dispatch=useDispatch()
  const ClearCollection=()=>{
    console.log('clear collection');
      dispatch(clearCollection(item));

    
  }
  return (

    <div className='overflow-auto px-10 py-6'>
      {collection.length>0?
       <div className='flex justify-between text-xl'>
        <h2 className=''>'You Collection'</h2>
        <button
        onClick={()=>{
          ClearCollection(item)
        }}
        className='bg-white text-gray-800 rounded py-1  px-3 active:scale-95 transition cursor-pointer'
        
        >Clear Collection</button>
      </div>

      :'Collection is Empty'}
     
       <div className='flex flex-wrap justify-evenly gap-3   w-full py-6 px-10 absolute  text-white '>
      {collection.map((item,id)=>{
        return <div key={id}>
          <CollectionCard item={item}/>
          </div>

      })}
        
      
    </div>
      
    </div>
  )
}

export default CollectionPage
