import React from 'react'
import { Bookmark } from "lucide-react";

function Card(props) {
     console.log(props);
    
  return (
    <>
         <div className="card">
      <div className="top">
           <img src={props.brandlogo}/>
          <button>
              Saved
            <Bookmark/>
          
          </button>
        </div>
          <div className="center">
             <h3>{props.company} <span>{props.datePosted}</span> </h3>
          <h1>{props.post}</h1>
           </div>

            <div className="time">
             <p>{props.tag1}</p>
           <p>{props.tag2}</p>
            </div>
         
         
          <div className="bottom">
            <div>  
              <h2>{props.pay}</h2>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
         
        </div>
      
    </>
  )
}

export default Card
