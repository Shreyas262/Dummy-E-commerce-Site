import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadOrders } from "../../utils/localStorage";

function ProfileInfo() {

    const user = useSelector(state => state.auth.user)
    const cartItems = useSelector(state => state.cart.items);
    const wishlistItems = useSelector(state => state.wishlist.items);
    const orders = loadOrders()[user.id] ?? [];
    const defaultAddress = user.addresses[0];

    if (!user) return null;

    const userAddress = defaultAddress
    ? `${defaultAddress.flatHouse}, ${defaultAddress.buildingStreet}, ${defaultAddress.city} - ${defaultAddress.zipcode}`
    : "";

    return (     
        <div className="profile-info card">
            <h3>Account Information</h3>

            <div className="profile-info-item">
                <span>Default Address</span>
                <span>{ defaultAddress ? userAddress : "No default address" }</span>
            </div>

            <div className="profile-info-item">
                <span><Link to={"/cart"}>Cart Items</Link></span>
                <span>{cartItems.length}</span>
            </div>

            <div className="profile-info-item">
                <span><Link to={"/wishlist"}>Wishlist Items</Link></span>
                <span>{wishlistItems.length}</span>
            </div>

            <div className="profile-info-item">
                <span><Link to={"/orders"}>Orders</Link></span>
                <span>{orders.length}</span>
            </div>

        </div>
    )
}

export default ProfileInfo;