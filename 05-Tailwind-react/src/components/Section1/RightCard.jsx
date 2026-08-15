import React from 'react'
import RIghtCardContent from './RIghtCardContent'

function RightCard(props) {
  return (
    <div className='h-full  w-70 overflow-hidden relative  rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RIghtCardContent id={props.id} tag={props.tag} intro={props.intro}/>


    </div>
  )
}

export default RightCard
