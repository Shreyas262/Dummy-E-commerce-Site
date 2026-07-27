export const saveCart = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
}

export const loadCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    return cartItems
}