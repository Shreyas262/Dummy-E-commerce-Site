import { loadUser, removeUser, saveUser } from "../../utils/localStorage";

const authPersistenceMiddleware = store => next => action => {
    
    const result = next(action);

    if(/^auth\//.test(action.type)){
        const user = store.getState().auth.user;
        if (user === null) {
            removeUser();
        } else {
            saveUser(user);
        }
    }
    return result;
}

export default authPersistenceMiddleware