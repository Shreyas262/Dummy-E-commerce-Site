import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../../features/cart/cartSlice';

function ProductCard({product}) {
  const dispatch = useDispatch();
  return (
    <div className='product-card'>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Category: {product.category}</p>
          <Link to={`/products/${product.id}`}>View Details</Link>
          <button onClick={()=> dispatch(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default ProductCard
