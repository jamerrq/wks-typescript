import {
    Table, TableHeader, TableBody,
    TableColumn, TableRow, TableCell
} from "@nextui-org/react";

// Puff
import Puff from './Puff';

// Icons
import TrashIcon from "../icons/TrashIcon";


interface UsersTableProps {
    users: User[];
    loading: boolean;
    handleDelete: (id: number) => void;
}

const UsersTable = (props: UsersTableProps): JSX.Element => {

    const { users, loading, handleDelete } = props;

    return (!loading ?
        users?.length ?
            (<Table >
                <TableHeader>
                    <TableRow>
                        <TableColumn>ID</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Last Name</TableColumn>
                        <TableColumn>Actions</TableColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user: User) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>
                                <button onClick={() => handleDelete(user.id)}>
                                    <TrashIcon />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>)
            : <p>No users</p>
        : <Puff stroke="#98ff98" />
    );
};


export default UsersTable;
