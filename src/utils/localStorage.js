function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function saveUserCollection(key, userId, items) {
    const collection = loadFromStorage(key) || {}
    
    saveToStorage(key, {
        ...collection,
        [userId]: items
    })
}

function loadUserCollection(key, userId) {
    const collection = loadFromStorage(key) || {}
    return collection[userId] || [];
}

// save cart to local storage
export const saveCart = (userId, items) => {
    saveUserCollection("carts", userId, items)
}

// load cart from local storage
export const loadCart = (userId) => {
    return loadUserCollection("carts", userId)
}

// save wishlist to local storage
export const saveWishlist = (userId, items) => {
    saveUserCollection("wishlists", userId, items)
}

// load wishlist from localStorage
export const loadWishlist = (userId) => {
    return loadUserCollection("wishlists", userId)
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