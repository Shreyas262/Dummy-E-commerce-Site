import { removeFromWishlist, clearWishlist } from "../../app-store/slice/wishlistSlice"
import { addToCart } from "../../app-store/slice/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import './wishlist.css'


function Wishlist() {
  const wishlist = useSelector(
    state => state.wishlist.items
  );
  const cartItems = useSelector(state=>state.cart.items)
  const dispatch = useDispatch();
  
  if (wishlist.length === 0) {
  return (
    <div className="empty-wishlist">

      <div className="empty-wishlist-icon">
        ❤️
      </div>

      <h2>Your wishlist is empty</h2>

      <p>
        Save products you love and they'll appear here.
      </p>

      <Link
        to="/products"
        className="continue-shopping-btn"
      >
        Browse Products
      </Link>

    </div>
  );
  }
  
  return (
    <div className="wishlist-page">

      <div className="wishlist-header">

        <h1>My Wishlist</h1>

        <button
          className="clear-btn wishlist-clear-btn"
          onClick={() => {
              const confirmClear = window.confirm(
                  "Are you sure you want to clear your wishlist?"
              );

              if (confirmClear) {
                  dispatch(clearWishlist());
              }
            }}
        >
            Clear Wishlist
        </button>

      </div>

      <div className="wishlist-grid">

        {wishlist.map(product => {

          const isInCart = cartItems.some(item => item.id === product.id);

          return(
            <div key={product.id} className="wishlist-card">

              <img
                src={product.thumbnail}
                alt={product.title}
                className="wishlist-image"
              />

              <h3 className="wishlist-title">{product.title}</h3>

              <p className="wishlist-price">${product.price}</p>

              <div className="wishlist-actions">

                <Link to={`/products/${product.id}`} className="details-btn">
                  View Details
                </Link>
                
                <button
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                  className="remove-btn"
                >
                  Remove
                </button>
                
                <button
                  disabled={isInCart}
                  onClick={() => dispatch(addToCart(product))}
                  className="cart-btn"
                >
                  {isInCart ? "Already in Cart" : "Add to Cart"}
                </button>

              </div>
            </div>
          )
        })}
        
      </div>

    </div>
  );
}


export default Wishlist
