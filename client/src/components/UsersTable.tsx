// Puff
import Puff from './Puff';

// Icons
import TrashIcon from "../icons/TrashIcon";


interface UsersTableProps {
    users: User[];
    loading: boolean;
    loadingNewUser: boolean;
    handleDelete: (id: number) => void;
    handleAddRandomUser: () => void;
    handleFetchUsers: () => void;
}

const UsersTable = (props: UsersTableProps): JSX.Element => {

    // return (!loading ?
    //     users?.length ?
    //         (<Table >
    //             <TableHeader>
    //                 <TableRow>
    //                     <TableColumn>ID</TableColumn>
    //                     <TableColumn>Name</TableColumn>
    //                     <TableColumn>Last Name</TableColumn>
    //                     <TableColumn>Actions</TableColumn>
    //                 </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //                 {users.map((user: User) => (
    //                     <TableRow key={user.id}>
    //                         <TableCell>{user.id}</TableCell>
    //                         <TableCell>{user.name}</TableCell>
    //                         <TableCell>{user.lastName}</TableCell>
    //                         <TableCell>
    //                             <button onClick={() => handleDelete(user.id)}>
    //                                 <TrashIcon />
    //                             </button>
    //                         </TableCell>
    //                     </TableRow>
    //                 ))}
    //             </TableBody>
    //         </Table>)
    //         : <p>No users</p>
    //     : <Puff stroke="#98ff98" />
    // );

    return (
        <div id="main-container">
            <div className="table-buttons">
                <button onClick={props.handleFetchUsers}>Fetch Users</button>
                <button onClick={props.handleAddRandomUser}> Add Random User</button>
            </div>

            <div className="loading-icons" style={{ marginBottom: "2%" }}>
                {props.loading && <Puff stroke="#98ff98" />}
                {props.loadingNewUser && <Puff stroke="#A084E8" />}
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
                                        props.handleDelete(user.id)}>
                                        <TrashIcon />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>}
        </div>
    );

};


export default UsersTable;
