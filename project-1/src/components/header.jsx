import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
         <div className='logo'>
        <img src="/brand_logo.png" alt="logo" />
      </div>
      <div >
          <ul className='nav-items' >
            <li>
                <a href="/">MENU</a>
            </li>
            <li>
                <a href="/about">LOCATION</a>
            </li>
            <li>
                <a href="/contact">ABOUT</a>
            </li>
            <li>
                <a href="/cart">CONTACT</a>
            </li>
          </ul>
      </div>
      <div className='auth-buttons'>
            <button >logout</button>
      </div>
    </div>
  )
}
export default Header