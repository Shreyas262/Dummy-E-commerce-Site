import { useState } from 'react';
import AddressSelector from '../../components/checkout/AddressSelector'
import OrderSummary from '../../components/checkout/OrderSummary'
import PaymentMethod from '../../components/checkout/PaymentMethod'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import createOrder from '../../utils/createOrder';
import { clearCart } from '../../app-store/slice/cartSlice'
import { addOrder } from '../../utils/localStorage';
import './checkout.css'

function Checkout() {

    const user = useSelector(state => state.auth.user);
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedAddress, setSelectedAddress] = useState(
        user?.addresses?.[0] ?? null
    );

    const [paymentMethod, setPaymentMethod] = useState("upi")
    const [error, setError] = useState("")

    const handlePlaceOrder = () => {
        if (!selectedAddress) {
            setError("Please select an address")
            return;
        }
        if (!paymentMethod) {
            setError("Please select a payment method")
            return;
        }
        if (cartItems.length === 0) {
            alert('Your cart is empty');
            return;
        }

        const order = createOrder({
            user,
            cartItems,
            address: selectedAddress,
            paymentMethod,
        })

        if (!window.confirm("Are you sure you want to place this order?")) {
            return;
        }

        addOrder(user.id, order);
        dispatch(clearCart())
        navigate("/order-confirmation", {
            state: {
                orderId: order.id,
            }
        })
    }

    return (
        <section className="checkout-section">

            <div className="checkout-header">
                <h1>Checkout</h1>
                <p>Select address and payment method. Review your order and complete your purchase.</p>
            </div>

            <div className="checkout-container">

                <div className="checkout-main">

                    <AddressSelector
                        selectedAddress={selectedAddress}
                        onSelect={setSelectedAddress}
                    />

                    <PaymentMethod
                        paymentMethod={paymentMethod}
                        onSelect={setPaymentMethod}
                    />
                
                </div>

                <OrderSummary
                    onPlaceOrder={handlePlaceOrder}
                    cartItems={cartItems}
                />

            </div>

        </section>
    );
}

export default Checkout;
