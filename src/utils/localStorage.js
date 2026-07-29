// save cart to local storage
export const saveCart = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
}

// load cart from local storage
export const loadCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    return cartItems
}

// save wishlist to local storage
export const saveWishlist = (items) => {
    localStorage.setItem("wishlist", JSON.stringify(items));
}

// load wishlist from localStorage
export const loadWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    return wishlistItems
}
