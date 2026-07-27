import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../../features/cart/cartSlice"

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalCartItems = items.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = items.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)

  if(items.length === 0) return <p>Your cart is empty.</p>

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <div>
            <span>Quantity: </span>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <span>  {item.quantity}  </span>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>
          <button onClick={()=> dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}

      <p>Cart Summary</p>
      <p>
        Total Items: {totalCartItems}
      </p>
      <p>
        Total Price: {totalPrice}
      </p>

    </div>
  )
}

export default Cart
