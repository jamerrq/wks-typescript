import './styles/App.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers, deleteUsers, addRandomUser } from './actions';

// SVG Icons
import TrashIcon from './icons/TrashIcon';

// Components
import Switch from './components/Switch';
import Puff from './components/Puff';
// import UsersTable from './components/UsersTable';
// import Bars from './components/Bars';
// import TailSpin from './components/TailSpin';

// Dark Mode
import useTheme from './hooks/useTheme';


// eslint-disable-next-line react-refresh/only-export-components
function App(props: AppProps): JSX.Element {

    const { fetchUsers, deleteUsers, addRandomUser } = props;

    const { theme, toggleTheme } = useTheme();

    const [state, setState] = useState({
        loading: false,
        loadingNewUser: false,
    });

    useEffect(() => {
        // fetchUsers();
    }, [fetchUsers]);

    const handleDelete = async (id: number) => {
        deleteUsers(id);
    };

    const handleAddRandomUser = async () => {
        setState({ ...state, loadingNewUser: true });
        await addRandomUser();
        setState({ ...state, loadingNewUser: false });
    };

    const handleThemeChange = () => {
        toggleTheme();
    };

    const handleFetchUsers = async () => {
        setState({
            ...state,
            loading: true
        });
        await fetchUsers();
        // if (!props.users.length) {
        //     alert('No users found');
        // }
        setState({
            ...state,
            loading: false,
        });
        // console.log('state', state);
        // console.log('props', props);
    };

    return (<div className={`App ${theme}`}>
        <h1 className="title">{"<TypeScript Full Stack Workshop>"}</h1>
        <Switch handleSwitch={handleThemeChange} />
        <div id="main-container">
            <div className="table-buttons">
                <button onClick={handleFetchUsers}>Fetch Users</button>
                <button onClick={handleAddRandomUser}> Add Random User</button>
            </div>

            <div className="loading-icons" style={{ marginBottom: "2%" }}>
                {state.loading && <Puff stroke="#98ff98" />}
                {state.loadingNewUser && <Puff stroke="#A084E8" />}
            </div>

            {/* {props?.users?.length > 0 &&
                <UsersTable
                    users={props.users}
                    loading={state.loading}
                    handleDelete={handleDelete}
                />
            } */}


            {props?.users?.length > 0 && <table id="table-users">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {[...props.users]?.reverse()?.map((user: User) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <button onClick={() =>
                                        handleDelete(user.id)}>
                                        <TrashIcon />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>}
        </div>
    </div>);
}

const mapStateToProps = (state: StoreState): { users: User[]; } => {
    return {
        users: state.users
    };
};


const connectedApp = connect(mapStateToProps,
    { fetchUsers, deleteUsers, addRandomUser })(App);
export default connectedApp;
