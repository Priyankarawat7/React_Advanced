import React, { createContext, useState } from 'react'

export const ThemeDataContext=createContext()

function ThemeContext(props) {

    const[theme,setTheme]=useState('light')
  return (
    
    <ThemeDataContext.Provider value={[theme,setTheme]}>
        {props.children}


        </ThemeDataContext.Provider>
      
   
  )
}

export default ThemeContext
