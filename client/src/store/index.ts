import { applyMiddleware, createStore, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import reducers from "../reducers/";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware: ThunkMiddleware<stateInterface> = thunk;
export default createStore(reducers, composeEnhancers(applyMiddleware(middleware)));
