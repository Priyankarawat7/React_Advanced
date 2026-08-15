import React from 'react'
import Navbar from './Navbar'
import PageContent from './PageContent'

function Section1(props) {

  console.log(props);
  
  return (
    <div>
      <Navbar/>
       <PageContent users={props.users} />
    </div>
  )
}

export default Section1
