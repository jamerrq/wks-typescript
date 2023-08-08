// Styles
import '../styles/UsersTable.css';

// Puff
import Puff from './Puff';

// Icons
import TrashIcon from "../icons/TrashIcon";


interface UsersTableProps {
    users: User[];
    loading: boolean;
    loadingNewUser: boolean;
    usersLoaded: boolean;
    handleDelete: (id: number) => void;
    handleAddRandomUser: () => void;
    handleFetchUsers: () => void;
}

const UsersTable = (props: UsersTableProps): JSX.Element => {

    return (
        <div id="main-container">
            <div className="table-buttons">
                <button onClick={props.handleFetchUsers}>Fetch Users</button>
                {
                    props.usersLoaded &&
                    <button onClick={props.handleAddRandomUser}>
                        Add Random User
                    </button>
                }
            </div>

            <div className="loading-icons" style={{ marginBottom: "2%" }}>
                {props.loading && <Puff stroke="#98ff98" />}
                {props.loadingNewUser && <Puff stroke="#A084E8" />}
            </div>

            {
                props?.users?.length > 0 && props.usersLoaded ?
                    <table id="table-users">
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
                                            <button className="delete-button"
                                                onClick={() =>
                                                    props.handleDelete(user.id)
                                                }>
                                                <TrashIcon />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> :
                    <div className="no-users">
                        <h2>⚠️ No users loaded or found</h2>
                    </div>
            }
        </div>
    );

};


export default UsersTable;
