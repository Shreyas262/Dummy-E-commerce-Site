import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../../app-store/slice/cartSlice"
import { Link } from "react-router-dom";
import './cart.css'

// renders the cart with actions(remove item, increase & decrease quantity) and cart summary
function Cart() {
  const items = useSelector(state => state.cart.items);
  
  const totalCartItems = items.reduce((total, item) => total + item.quantity, 0)
  
  const totalPrice = items.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)
  
  const dispatch = useDispatch();
  
  if (items.length === 0) {
    return (
        <div className="empty-cart">

            <div className="empty-cart-icon">
                🛒
            </div>
            
            <h2>Your cart is empty</h2>

            <p>
                Looks like you haven't added anything yet.
            </p>
            
            <Link
                to="/products"
                className="continue-shopping-btn"
            >
                Continue Shopping
            </Link>

        </div>
    );
  }

  return (
    <>
      <h1 className="cart-title">
        Shopping Cart
      </h1>
      
    <div className="cart-page">

      <div className="cart-items">

        {items.map(item => (
          <div key={item.id} className="cart-item">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="cart-image"
            />

            <div className="cart-details">

              <h3>{item.title}</h3>

              <p className="price">
                ${item.price}
              </p>

              <div className="quantity-controls">

                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                
                <span>  {item.quantity}  </span>
                    
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

              </div>
              
              <p className="subtotal">
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>

            </div>

          </div>
        ))}

      </div>

      <div className="cart-summary">

        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Total Items</span>
          <strong>{totalCartItems}</strong>
        </div>

        <div className="summary-row summary-total">
          <span>Total Price</span>
          <strong>${totalPrice}</strong>
        </div>

        <button className="checkout-btn">
            Proceed to Checkout
        </button>

        <button
            className="clear-btn"
            onClick={() => {
              const confirmClear = window.confirm(
                  "Are you sure you want to clear your cart?"
              );

              if (confirmClear) {
                  dispatch(clearCart());
              }
            }}
        >
            Clear Cart
        </button>

      </div>

    </div>
  </>
  )
}

export default Cart
