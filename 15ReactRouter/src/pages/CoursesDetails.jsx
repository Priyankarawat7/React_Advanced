import React from 'react'
import { useParams } from 'react-router-dom'

function CoursesDetails() {
    const params=useParams()
    console.log(params.id);
    
  return (
    <div>
        <h1>  Courses Details</h1>  
      
    </div>
  )
}

export default CoursesDetails
