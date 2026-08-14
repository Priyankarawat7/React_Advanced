import React from 'react'

import Styles from './Header.module.css'


function Header() {
  return (
    <div className={Styles.header}>
       <h3> Header</h3>
       <button className={Styles.btn}>Login</button>
      
    </div>
  )
}

export default Header
