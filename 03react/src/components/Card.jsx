import React from 'react'
import { FaInstagram, FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe } from "react-icons/fa";

function Card(props) {
  return (
    <>

    <div className="card">
        <div className="top">
          <img src={props.image} alt="" />
            <h3>{props.role}</h3>
            <h4>{props.name}</h4>
            <h5>{props.profession}</h5>
            <p>{props.description}</p>
        </div>
        <div className="center">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaGlobe size={24} />

        </div>
        <div className="bottom">
            <button className='msgbtn'>Message</button>
            <button className='msgconnect'>Connect</button>
        </div>
    </div>


      
    </>
  )
}

export default Card
