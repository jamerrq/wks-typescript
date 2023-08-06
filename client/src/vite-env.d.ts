/// <reference types="vite/client" />

interface stateInterface {
    counter: number;
}

interface actionInterface {
    type: string;
}

interface User {
    id: number;
    name: string;
    lastName: string;
}

interface StoreState {
    users: User[];
}

interface AppProps {
    users: User[];
    fetchUsers(): void;
    deleteUsers(id: number): void;
    addRandomUser(): void;
}

interface SwitchProps {
    handleSwitch(): void;
    labelContent: string;
}
