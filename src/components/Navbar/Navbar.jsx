import React from 'react'
import './Navbar.css'

import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {
  return (
    <div className='navbar'>
      <NavLink to='/dashboard/contact'>contact</NavLink>
      <NavLink to='/dashboard/store'>store</NavLink>

      <p>Log out</p>
      <span>
        <BsCart3 />
      </span>
    </div>
  )
}
