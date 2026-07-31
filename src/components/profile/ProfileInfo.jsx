import { useSelector } from "react-redux";

function ProfileInfo() {

    const cartItems = useSelector(state => state.cart.items);

    const wishlistItems = useSelector(state => state.wishlist.items);

    return (
        <div className="profile-info card">
            <h3>Account Information</h3>

            <div className="profile-info-item">
                <span>Member Since</span>
                <span>July 2026</span>
            </div>

            <div className="profile-info-item">
                <span>Orders</span>
                <span>0</span>
            </div>

            <div className="profile-info-item">
                <span>Cart Items</span>
                {cartItems.length > 0
                    ? (
                    <span>
                        {cartItems.length}
                    </span>
                    )
                    : 0
                }
            </div>

            <div className="profile-info-item">
                <span>Wishlist Items</span>
                {wishlistItems.length > 0
                    ? (
                    <span>
                        {wishlistItems.length}
                    </span>
                    )
                    : 0
                }
            </div>

        </div>
    )
}

export default ProfileInfo;