// Navigation bar
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'

function Navbar() {

  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const getNavClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <header className='header'>
      <nav className='navbar'>
        <div className='logo'>
          <NavLink to="/">ShopEase</NavLink>
        </div>
          <ul className='nav-links'>
          <li><NavLink to={"/"} className={getNavClass} end>Home</NavLink></li>
          <li><NavLink to={"/products"} className={getNavClass}>Products</NavLink></li>
          <li>
            <NavLink to="/cart" className={getNavClass}>
              Cart
              {cartItems.length > 0 && (
                <span className="badge">
                    {cartItems.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className={getNavClass}>
              Wishlist
              {wishlistItems.length > 0 && (
                <span className="badge">
                    {wishlistItems.length}
                </span>
              )}
            </NavLink>
          </li>
          <li><NavLink to={"/auth/login"} className={getNavClass}>Login</NavLink></li>
        </ul>
        <div className='nav-actions'>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
