// Renders a product card according to the products array (used in Products.jsx) 
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlist/wishlistSlice'
import './productCard.css'

function ProductCard({ product, variant }) {
  
  const wishlist = useSelector(state => state.wishlist.items)
  const isWishlisted = wishlist.some(item=> item.id === product.id)
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
        
          <button
            className="wishlist-btn"
            onClick={handleWishlistToggle}
            aria-label={
              isWishlisted
                ? "Remove from wishlist"
                : "Add to wishlist"
            }
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>

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

          <button
            className="cart-btn"
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to Cart
          </button>

        </div>
    
      </div>
    )
  }
}

export default ProductCard
