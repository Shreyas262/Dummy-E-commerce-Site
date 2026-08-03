function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

// save cart to local storage
export const saveCart = (userId, items) => {
    localStorage.setItem("cart", JSON.stringify(items))
}

// load cart from local storage
export const loadCart = (userId) => {
    const cartItems = loadFromStorage("cart") || [];
    return cartItems
}

// save wishlist to local storage
export const saveWishlist = (userId, items) => {
    saveToStorage("wishlist", items);
}

// load wishlist from localStorage
export const loadWishlist = (userId) => {
    const wishlistItems = loadFromStorage("wishlist") || [];
    return wishlistItems
}

// saves array of multiple users
export const saveUsers = (users) => {
    saveToStorage("users", users);
}

// loads array of multiple users
export const loadUsers = () => {
    const users = loadFromStorage("users") || [];
    return users;
}

// saves a user for current session
export const saveUser = (user) => {
    saveToStorage("user", user)
}

// Loads current user 
export const loadUser = () => {
    const user = loadFromStorage("user") || null;
    return user;
}

// logout current user 
export const removeUser = () => {
    localStorage.removeItem("user")
}