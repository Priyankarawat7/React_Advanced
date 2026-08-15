import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {

  const users=[
    {
    img:"https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNpb25hbHxlbnwwfHwwfHx8MA%3D%3D",

      intro:"",
      tag:"Satisfied"

    },
    {
       img:"https://images.unsplash.com/photo-1546979859-b7d45d499dd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc2lvbmFsfGVufDB8fDB8fHww",
      intro:"",
      tag:"Underserved"

    },

    {
       img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc2lvbmFsfGVufDB8fDB8fHww",
      intro:"",
      tag:"UnderBanked"

    }

  ]
  return (
    <>

    <Section1 users={users}/>

    {/* <Section2/> */}
      
  
    </>
  )
}

export default App
