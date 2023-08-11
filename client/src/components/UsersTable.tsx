// Styles
import '../styles/UsersTable.css';

// Puff
import Puff from './Puff';

// Custom Icons
import TrashIcon from "../icons/TrashIcon";

// React Icons
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GiPerspectiveDiceSixFacesRandom, } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { BiWorld } from 'react-icons/bi';

// Countries Dictionary
// AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE,
// IN, IR, MX, NL, NO, NZ, RS, TR, UA, US
const countries: { [key: string]: string[]; } = {
    'AU': ['🇦🇺', 'Australia'],
    'BR': ['🇧🇷', 'Brasil'],
    'CA': ['🇨🇦', 'Cánada'],
    'CH': ['🇨🇭', 'Suiza'],
    'DE': ['🇩🇪', 'Germany'],
    'DK': ['🇩🇰', 'Denmark'],
    'ES': ['🇪🇸', 'Spain'],
    'FI': ['🇫🇮', 'Finland'],
    'FR': ['🇫🇷', 'France'],
    'GB': ['🇬🇧', 'Great Britain'],
    'IE': ['🇮🇪', 'Ireland'],
    'IN': ['🇮🇳', 'India'],
    'IR': ['🇮🇷', 'Iran'],
    'MX': ['🇲🇽', 'Mexico'],
    'NL': ['🇳🇱', 'Netherlands'],
    'NO': ['🇳🇴', 'Norway'],
    'NZ': ['🇳🇿', 'New Zealand'],
    'RS': ['🇷🇸', 'Serbia'],
    'TR': ['🇹🇷', 'Turkey'],
    'UA': ['🇺🇦', 'Ukraine'],
    'US': ['🇺🇸', 'United States'],
};

const UsersTable = (props: UsersTableProps): JSX.Element => {

    return (
        <div id="main-container" className="flex w-10/12 flex-col h-full items-center ">
            <div className="gap-16 flex justify-center mb-5 [&>button]:border-2 [&>button]:border-[#3178c6] [&>button]:bg-[#3178c688] [&>button]:font-karla [&>button:hover]:border-2 [&>button:hover]:bg-[#dfb01788] [&>button:hover]:border-[--accent]">
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

            <div className="mb-2">
                {props.loading && <Puff stroke="#98ff98" />}
                {props.loadingNewUser && <Puff stroke="#A084E8" />}
            </div>

            {
                props?.users?.length > 0 && props.usersLoaded ?
                    <table className="w-4/5 table-auto font-karla font-medium mb-[50px] [&>*:last-child]:border-b-2 [&>*:last-child]:border-b-[--border] [&>thead>tr]:border-b-2 [&>thead>tr]:border-b-[--border] [&>thead>tr]:border-t-2 [&>thead>tr]:border-t-[--border] border-l border-l-[--border] border-r border-r-[--border]">
                        <thead className="font-bold">
                            <tr className="[&>th]:border-bottom [&>th]:p-3 [&>th]:border-[--border]">
                                <th className="w-1/12">ID</th>
                                <th
                                    data-title="Nationality"
                                >
                                    <BiWorld />
                                </th>
                                <th className="">
                                    <CgProfile /> Picture
                                </th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="[&>tr:hover]:bg-[--accent-hover]">
                            {[...props.users]?.reverse()?.map((user: User) => {
                                const [flag = '🏴‍☠️', country = user.nat] =
                                    countries[user.nat];
                                return (
                                    <tr key={user.id} className="[&>td]:p-1.5">
                                        <td>{user.id.slice(0, 5)}</td>
                                        <td data-title={country}>{flag}</td>
                                        <td align='center'
                                        >
                                            <img className="rounded-full border-2 border-[#3178c6]"
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
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="border-2 border-[--border] bg-[#D21312] rounded-full p-1.5 hover:bg-[#F94C10]"
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
