import { combineReducers, Reducer } from "redux";
import { usersReducer } from "./users";
// import { User } from "../actions/types";

interface StoreState {
    users: User[];
}

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    users: usersReducer
});


export default rootReducer;
