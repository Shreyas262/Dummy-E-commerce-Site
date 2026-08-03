import { saveWishlist } from "../../utils/localStorage";
// saving the cart to local storage after every action from the cart
const wishlistPersistenceMiddleware = store => next => action => {
    
    const result = next(action);

    if(/^wishlist\//.test(action.type)){
        const items = store.getState().wishlist.items;
        saveWishlist(items);
    }
    return result;
}

export default wishlistPersistenceMiddleware