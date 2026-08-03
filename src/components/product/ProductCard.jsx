// Renders a product card according to the products array (used in Products.jsx) 
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../app-store/slice/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../app-store/slice/wishlistSlice'
import './productCard.css'

function ProductCard({ product, variant }) {
  
  const wishlist = useSelector(state => state.wishlist.items)

  const isWishlisted = wishlist.some(item => item.id === product.id)
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch();

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  }

  if (variant === "compact") {
    return (
      <div className="product-card">

        <div className="product-image">

          <img src={product.thumbnail} alt={product.title} />
        
        </div>

        <div className="product-content">

          <h2 className="product-title">
            {product.title}
          </h2>

          <p className="product-price">
            ${product.price}
          </p>

        </div>

        <div className="product-actions">

          <Link
            className="details-btn"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>

        </div>        

      </div>
    )
  }

  if (variant === "detailed") {
    return (
      <div className='product-card'>
      
        <div className="product-image">

          <img src={product.thumbnail} alt={product.title} />
        
          {isAuthenticated && <button
            className="wishlist-btn"
            onClick={handleWishlistToggle}
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>}

        </div>

        <div className="product-content">

          <h2 className="product-title">
            {product.title}
          </h2>

          <p className="product-category">
            {product.category}
          </p>

          <p className="product-rating">
            ⭐ {product.rating}
          </p>

          <p className="product-price">
            ${product.price}
          </p>

        </div>
      
        <div className="product-actions">

          <Link
            className="details-btn"
            to={`/products/${product.id}`}
          >
            View Details
          </Link>

          {isAuthenticated && <button
            className="cart-btn"
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to Cart
          </button>}

        </div>
    
      </div>
    )
  }
}

export default ProductCard
