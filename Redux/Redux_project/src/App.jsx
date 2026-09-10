import React from 'react'
import { fetchPhotos } from './api/mediaApi'

const App = () => {
  function getPhotos(){
    fetchPhotos()
  }
  return (
    <div className='h-screen bg-gray-950 text-white'>
      <button className='py-2 px-3 bg-white text-black' 
      onClick={async ()=>{
       const data= await fetchPhotos('cat');
       console.log(data.results);
       
        
      }
      }>get photos</button>
    </div >
  )
}

export default App
