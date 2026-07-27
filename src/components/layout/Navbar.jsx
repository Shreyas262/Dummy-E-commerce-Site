import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <NavLink to="/">Logo</NavLink>
        <ul>
          <li><NavLink to={"/"} end>Home</NavLink></li>
          <li><NavLink to={"/products"}>Products</NavLink></li>
          <li><NavLink to={"/cart"}>Cart</NavLink></li>
          <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
          <li><NavLink to={"/auth/login"}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
