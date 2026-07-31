import CheckoutForm from '../../components/checkout/CheckoutForm'
import OrderSummary from '../../components/checkout/OrderSummary'

function Checkout() {
    return (
        <div className='checkout-container'>
      
            <CheckoutForm />
            <OrderSummary />

        </div>
    );
}

export default Checkout
