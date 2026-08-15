import React from 'react'
import RightCard from './RightCard'


function RightText(props) {
  console.log(props);
  
  return (
    <div className='h-full flex flex-nowrap gap-10 overflow-x-auto rounded-4xl p-4 w-3/4  '>
      {props.users.map(function(e ,idx){

        return <RightCard key={idx} id={idx} img={e.img} intro={e.intro} tag={e.tag} />

      })}
      
    </div>
  )
}

export default RightText
