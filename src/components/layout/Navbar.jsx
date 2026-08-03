// Navigation bar
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../app-store/slice/authSlice'
import './navbar.css'

function Navbar() {

  const cartItems = useSelector(state => state.cart.items);

  const wishlistItems = useSelector(state => state.wishlist.items);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  
  const getNavClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <header className='header'>

      <nav className='navbar'>

        <div className='logo'>

          <NavLink to="/">ShopEase</NavLink>
        </div>

        <ul className='nav-links'>
          
          <li>
            <NavLink to={"/"} className={getNavClass} end>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/products"} className={getNavClass}>Products</NavLink>
          </li>

          {isAuthenticated &&
            
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

          }
          
          {isAuthenticated &&
            
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

          }

          {isAuthenticated
            ? <li><NavLink to={"/profile"} className={getNavClass}>
                Profile
              </NavLink></li>
            : <li><NavLink to={"/login"} className={getNavClass}>
                Login
            </NavLink></li>
          }
        </ul>

        <div className='nav-actions'>

          
          
        </div>

      </nav>

    </header>
  )
}

export default Navbar
