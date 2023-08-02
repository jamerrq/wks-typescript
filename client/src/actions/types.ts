export enum ActionTypes {
    fetchUsers = 'FETCH_USERS',
    deleteUser = 'DELETE_USER',
    addRandomUser = 'ADD_RANDOM_USER'
}

export interface FetchUserAction {
    type: ActionTypes.fetchUsers;
    payload: User[];
}

export interface DeleteUserAction {
    type: ActionTypes.deleteUser;
    payload: User;
}

export interface AddRandomUserAction {
    type: ActionTypes.addRandomUser;
    payload: User;
}

export interface User {
    id: number;
    name: string;
    lastName: string;
}
