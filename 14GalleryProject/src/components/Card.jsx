import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div>
       
      <a href={props.e.url} target='_blank'>
        <div  className='h-40 w-44 bg-white rounded overflow-hidden'>
        <img className='h-full w-full object-cover ' src={props.e.download_url} alt="" />
      </div>
       <h2 className='text-center font-bold'>{props.e.author}</h2>
      </a>
      
    </div>
  )
}

export default Card
