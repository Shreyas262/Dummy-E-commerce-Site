import { useSelector } from "react-redux";

function ProfileInfo() {

    const user = useSelector(state => state.auth.user)
    const cartItems = useSelector(state => state.cart.items);
    const wishlistItems = useSelector(state => state.wishlist.items);

    if (!user) return null;

    const userAddress = `${user.addresses[0].flatHouse}, ${user.addresses[0].buildingStreet}, ${user.addresses[0].city} - ${user.addresses[0].zipcode}`

    return (
        <div className="profile-info card">
            <h3>Account Information</h3>

            <div className="profile-info-item">
                <span>Default Address</span>
                <span>{ user.addresses !== [] ? userAddress : "No default address" }</span>
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