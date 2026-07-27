import { saveCart } from "../utils/localStorage";

const cartPersistenceMiddleware = store => next => action => {
    
    const result = next(action);

    if(/^cart\//.test(action.type)){
        const items = store.getState().cart.items;
        saveCart(items);
    }
    return result;
}

export default cartPersistenceMiddleware