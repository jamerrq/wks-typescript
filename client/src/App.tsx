import './App.css';
import { connect } from 'react-redux';
import { useEffect, } from 'react';
import { fetchUsers, deleteUsers, addRandomUser } from './actions';

// SVG Icons
import TrashIcon from './icons/trash.svg';

// Components
import Switch from './components/Switch';


// eslint-disable-next-line react-refresh/only-export-components
function App(props: AppProps): JSX.Element {

    const { fetchUsers, deleteUsers, addRandomUser } = props;

    useEffect(() => {
        // fetchUsers();
    }, [fetchUsers]);

    const handleDelete = async (id: number) => {
        deleteUsers(id);
    };

    const handleAddRandomUser = async () => {
        addRandomUser();
        fetchUsers();
    };

    return (<div>
        <h1>TypeScript Workshop</h1>
        <Switch />
        <div>
            <div className="table-buttons">
                <button onClick={() => fetchUsers()}>Fetch Users</button>
                <button onClick={() => handleAddRandomUser()}> Add Random User</button>
            </div>

            <table id="table-users">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Borrar Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user: User) => {
                        return (<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td><button onClick={() => handleDelete(user.id)}>
                                <img className='trash-icon' src={TrashIcon} alt="" />
                            </button></td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    </div>);
}

const mapStateToProps = (state: StoreState): { users: User[]; } => {
    return {
        users: state.users,
    };
};


const connectedApp = connect(mapStateToProps, { fetchUsers, deleteUsers, addRandomUser })(App);
export default connectedApp;
