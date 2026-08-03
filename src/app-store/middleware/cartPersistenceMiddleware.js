import { saveCart, loadUser } from "../../utils/localStorage";

const user = loadUser()
// saving the cart to local storage after every action from the cart
const cartPersistenceMiddleware = store => next => action => {
    
    const result = next(action);

    if(/^cart\//.test(action.type)){
        const items = store.getState().cart.items;
        saveCart(user.id, items);
    }
    return result;
}

export default cartPersistenceMiddleware