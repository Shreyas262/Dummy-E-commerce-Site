import { removeUser, saveUser, saveCart, saveWishlist, } from "../../utils/localStorage";
import updateStoredUser from "../../utils/updateStoredUser";

const persistenceMiddleware = store => next => action => {
    const result = next(action);
    
    const state = store.getState()
    const user = state.auth.user;

    if(/^auth\//.test(action.type)){
        if (user === null) {
            removeUser();
        } else {
            saveUser(user);
            updateStoredUser(user);
        }
    }

    if(/^cart\//.test(action.type)){
        if(user !== null){
            const items = state.cart.items;
            saveCart(user.id, items);
        }
    }

    if(/^wishlist\//.test(action.type)){
        if(user !== null){
            const items = state.wishlist.items;
            saveWishlist(user.id, items);
        }
    }

    return result
}

export default persistenceMiddleware