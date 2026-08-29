import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext';

function Nav2() {

   const [theme,setTheme]= useContext(ThemeDataContext)
   console.log(theme);
   
   
    
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
       <h3>{theme}</h3> 
      
    </div>
  )
}

export default Nav2
