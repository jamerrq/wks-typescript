import axios from 'axios';
import { Dispatch } from 'redux';
import {
    ActionTypes, DeleteUserAction, FetchUserAction, AddRandomUserAction
} from './types.d';


const api = 'https://randomuser.me/api/';
const generateRandomUser = async () => {
    const response = await axios.get(api);
    const { results } = response.data;
    const [data] = results;
    const user = {
        id: data.login.uuid,
        fullname: `${data.name.first} ${data.name.last}`,
        gender: data.gender,
        picture: JSON.stringify(data.picture),
        nat: data.nat,
        email: data.email
    };
    return user;
};

const { VITE_BACK_MODE: BACK_MODE } = import.meta.env;
let ROOT_URL = 'https://wks-typescript-server.onrender.com/api';
let MODE_MSG = 'FETCHING DATA FROM DEPLOY 🚀';
if (BACK_MODE === 'local') {
    ROOT_URL = 'http://localhost:3001/api';
    MODE_MSG = 'FETCHING DATA FROM LOCAL 🏠';
}
console.log(`[DATA-SOURCE] : ${MODE_MSG}`);


export const fetchUsers = () => {
    return async (dispatch: Dispatch<FetchUserAction>) => {
        const response = await axios.get<User[]>(`${ROOT_URL}/users`);
        dispatch<FetchUserAction>({
            type: ActionTypes.fetchUsers,
            payload: response.data
        });
    };
};

export const deleteUsers = (id: string) => {
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
        const randomUser = await generateRandomUser();
        const response = await axios.post(`${ROOT_URL}/users`, randomUser);
        dispatch<AddRandomUserAction>({
            type: ActionTypes.addRandomUser,
            payload: response.data
        });
    };
};
