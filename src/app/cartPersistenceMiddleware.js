import { saveCart } from "../utils/localStorage";
// saving the cart to local storage after every action from the cart
const cartPersistenceMiddleware = store => next => action => {
    
    const result = next(action);

    if(/^cart\//.test(action.type)){
        const items = store.getState().cart.items;
        saveCart(items);
    }
    return result;
}

export default cartPersistenceMiddleware