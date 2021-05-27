import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunkMiddleware from "redux-thunk";
//
// const logEnhancer = (createStore) => (...args) => {
//
//     const store = createStore(...args);
//
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type);
//         return originalDispatch(action);
//     };
//     return store;
// };
//
// const stringEnhancer = (createStore) => (...args) => {
//
//     const store = createStore(...args);
//
//     // Start: changing default logic of dispatch func (use with string) //
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return originalDispatch({
//                 type: action
//             })
//         }
//         return originalDispatch(action);
//     };
//     // End: changing default logic of dispatch func (use with string) //
//
//     return store;
// };

const logMiddleware = ({getState}) => (nextDispatch) => (action) => {
    console.log(action.type, getState());
    return nextDispatch(action);
};

const stringMiddleware = () => (nextDispatch) => (action) => {
    if (typeof action === 'string') {
        return nextDispatch({
            type: action
        });
    }
    return nextDispatch(action);
}

const store = createStore(reducers, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));

const delayActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout);
};

store.dispatch(delayActionCreator(2000));

export default store;