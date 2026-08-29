import React, { useContext } from 'react'
import Nav2 from './Nav2';
import { ThemeDataContext } from '../Context/ThemeContext';

function Navbar() {
    //console.log(children[0]);

   const [theme]= useContext(ThemeDataContext)

   //console.log(data);
   
    
  return (
    <div className={theme}>
     
     {/* <h1>{data}</h1> */}
     {/* {children[0]} */}
     <Nav2 /> 
    </div>
  )
}

export default Navbar
