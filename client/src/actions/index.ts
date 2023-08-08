import axios from 'axios';
import { Dispatch } from 'redux';
import {
    ActionTypes, DeleteUserAction, FetchUserAction, AddRandomUserAction
} from './types.d';


const generateRandomUser = () => {
    const randomUser = {
        name: Math.random().toString(36).substring(7),
        lastName: Math.random().toString(36).substring(7)
    };
    return randomUser;
};

const { VITE_BACK_MODE: BACK_MODE } = import.meta.env;
let ROOT_URL = 'https://wks-typescript-server.onrender.com/api';
if (BACK_MODE === 'local') {
    ROOT_URL = 'http://localhost:3001/api';
    console.log('[BACK-SOURCE] FETCHING DATA FROM LOCAL 🤖');
} else {
    console.log('[BACK-SOURCE] FETCHING DATA FROM DEPLOY 🚀');
}

export const fetchUsers = () => {
    return async (dispatch: Dispatch<FetchUserAction>) => {
        const response = await axios.get<User[]>(`${ROOT_URL}/users`);
        dispatch<FetchUserAction>({
            type: ActionTypes.fetchUsers,
            payload: response.data
        });
    };
};

export const deleteUsers = (id: number) => {
    return async (dispatch: Dispatch<DeleteUserAction>) => {
        const response = await axios.delete(`${ROOT_URL}/users/${id}`);
        dispatch<DeleteUserAction>({
            type: ActionTypes.deleteUser,
            payload: response.data
        });
    };
};

export const addRandomUser = () => {

    return async (dispatch: Dispatch<AddRandomUserAction>) => {
        const randomUser = generateRandomUser();
        const response = await axios.post(`${ROOT_URL}/users`, randomUser);
        dispatch<AddRandomUserAction>({
            type: ActionTypes.addRandomUser,
            payload: response.data
        });
    };

};
