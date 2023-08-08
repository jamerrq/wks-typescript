// Styles
import '../styles/UsersTable.css';

// Puff
import Puff from './Puff';

// Custom Icons
import TrashIcon from "../icons/TrashIcon";

// React Icons
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
// import { SlPicture } from 'react-icons/sl';
// import { PiFlagDuotone } from 'react-icons/pi';
import { FaFlag } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';


interface UsersTableProps {
    users: User[];
    loading: boolean;
    loadingNewUser: boolean;
    usersLoaded: boolean;
    handleDelete: (id: string) => void;
    handleAddRandomUser: () => void;
    handleFetchUsers: () => void;
}

const UsersTable = (props: UsersTableProps): JSX.Element => {

    return (
        <div id="main-container">
            <div className="table-buttons">
                <button
                    onClick={props.handleFetchUsers}
                    data-title="Retrieve users from database"
                >
                    Fetch Users <AiOutlineCloudDownload />
                </button>
                {
                    props.usersLoaded &&
                    <button
                        onClick={props.handleAddRandomUser}
                        data-title="Add random user to database"
                    >
                        Add Random <GiPerspectiveDiceSixFacesRandom />
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
                                <th className="id-column">ID</th>
                                <th>
                                    <CgProfile /> Picture
                                </th>
                                <th>Full Name</th>
                                <th
                                    data-title="Nationality"
                                >
                                    <FaFlag />
                                </th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...props.users]?.reverse()?.map((user: User) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id.slice(0, 5)}</td>
                                        <td align='center'
                                            className="user-thumbnail"
                                        >
                                            <img
                                                src={JSON.parse(
                                                    user.picture).thumbnail
                                                }
                                                alt="user thumbnail"
                                                style={
                                                    {
                                                        display: "inline-block",
                                                    }
                                                }
                                            />
                                        </td>
                                        <td>{user.fullname}</td>
                                        <td>{user.nat}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="delete-button"
                                                onClick={() =>
                                                    props.handleDelete(user.id)
                                                }
                                                data-title='Delete User'
                                            >
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
