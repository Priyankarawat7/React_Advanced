import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

function PageContent(props) {
  console.log(props);
  
  return (
    <div className='py-10 flex gap-10 items-center h-[90vh] px-18 '> 

    <LeftText/>
    <RightText users={props.users}/>

      
    </div>
  )
}

export default PageContent
