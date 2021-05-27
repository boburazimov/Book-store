import {compose, createStore} from "redux";
import reducers from "./reducers";

const logEnhancer = (createStore) => (...args) => {

    const store = createStore(...args);

    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type);
        return originalDispatch(action);
    };
    return store;
};

const stringEnhancer = (createStore) => (...args) => {

    const store = createStore(...args);

    // Start: changing default logic of dispatch func (use with string) //
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if (typeof action === 'string'){
            return originalDispatch({
                type: action
            })
        }
        return originalDispatch(action);
    };
    // End: changing default logic of dispatch func (use with string) //

    return store;
};

const store = createStore(reducers, compose(stringEnhancer, logEnhancer));

store.dispatch('Hello World');

export default store;