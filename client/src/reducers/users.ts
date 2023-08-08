import {
    ActionTypes, FetchUserAction, DeleteUserAction, AddRandomUserAction, User
} from '../actions/types.d';


type Action = FetchUserAction | DeleteUserAction | AddRandomUserAction;

export const usersReducer = (state: User[] = [], action: Action): User[] => {
    switch (action.type) {
        case ActionTypes.fetchUsers:
            return action.payload;
        case ActionTypes.deleteUser:
            return state.filter((user: User) => user.id !== action.payload.id);
        case ActionTypes.addRandomUser:
            return [...state, action.payload];
        default:
            return state;
    }
};
