import { useSelector } from "react-redux"
import { loadOrders } from "../../utils/localStorage"
import OrderCard from '../../components/orders/OrderCard'
import './orders.css'

function Orders() {

    const user = useSelector(state => state.auth.user)
    if (!user) return null;
    const orders = [...loadOrders()[user.id] ?? []].reverse();

    return (
        <section className="orders-section">
            
            <div className="orders-container">

                <div className="orders-header">
                    <h1>My Orders</h1>
                    <p>View and manage your previous orders.</p>
                </div>
                <div className="orders-card-container">

                    {orders.length === 0 ? (
                        <p>You haven't placed any orders yet.</p>
                    ) : (
                        orders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                            />
                        ))
                    )}

                </div>
            </div>
        </section>
    )
}

export default Orders
