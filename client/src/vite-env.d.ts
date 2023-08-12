/// <reference types="vite/client" />

interface stateInterface {
    counter: number;
}

interface actionInterface {
    type: string;
}

interface User {
    id: string;
    fullname: string;
    email: string;
    gender: string;
    nat: string;
    picture: string;
}

interface UsersTableProps {
    users: User[];
    loading: boolean;
    loadingNewUser: boolean;
    usersLoaded: boolean;
    handleDelete: (id: string) => void;
    handleAddRandomUser: () => void;
    handleFetchUsers: () => void;
}


interface StoreState {
    users: User[];
}

interface AppProps {
    users: User[];
    fetchUsers(): void;
    deleteUsers(id: string): void;
    addRandomUser(): void;
}

interface SwitchProps {
    handleSwitch(): void;
    labelContent: string;
}
