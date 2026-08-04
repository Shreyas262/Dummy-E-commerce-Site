import { useSelector } from "react-redux";

function ProfileInfo() {

    const user = useSelector(state => state.auth.user)
    const cartItems = useSelector(state => state.cart.items);
    const wishlistItems = useSelector(state => state.wishlist.items);

    if (!user) return null;

    return (
        <div className="profile-info card">
            <h3>Account Information</h3>

            <div className="profile-info-item">
                <span>Default Address</span>
                <span>{ user.addresses !== [] ? user.addresses[0] : "No default address" }</span>
            </div>

            <div className="profile-info-item">
                <span>Zipcode</span>
                <span>{ user.zipcode }</span>
            </div>

            <div className="profile-info-item">
                <span>Cart Items</span>
                <span>{cartItems.length}</span>
            </div>

            <div className="profile-info-item">
                <span>Wishlist Items</span>
                <span>{wishlistItems.length}</span>
            </div>

            <div className="profile-info-item">
                <span>Orders</span>
                <span>0</span>
            </div>

        </div>
    )
}

export default ProfileInfo;