// Puff
import Puff from './Puff';

// Custom Icons
import TrashIcon from "../icons/TrashIcon";

// React Hooks
import { useMemo, useState } from 'react';

// React Icons
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GiPerspectiveDiceSixFacesRandom, } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { BiWorld } from 'react-icons/bi';
import { HiOutlineAtSymbol } from 'react-icons/hi';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';


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

export default (props: UsersTableProps): JSX.Element => {

    const [buttonFired, setButtonFired] = useState<string | null>(null);

    const ownHandleDelete = async (id: string) => {
        setButtonFired(id);
        await props.handleDelete(id);
        setButtonFired(null);
    };

    const [orderBy, setOrderBy] = useState<{
        field: string | null; order: boolean;
    }>({ 'field': null, 'order': true });

    const [filterBy, setFilterBy] = useState<{
        field: string; value: string | null;
    }>({ field: 'name', value: null });

    const handleSelectChange = (event:
        React.ChangeEvent<HTMLSelectElement>) => {
        const { value: field } = event.target;
        const newState = { field, value: filterBy.value };
        // console.log('newState', newState);
        setFilterBy(newState);
    };

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newState = { field: filterBy.field, value };
        // console.log('newState:', newState);
        setFilterBy(newState);
    };

    const handleHeaderTouch = (field: string) => {
        return () => {
            const newState = orderBy.field === field ?
                (orderBy.order ?
                    { field, order: !orderBy.order } :
                    { field: null, order: true }) :
                { field, order: true };
            setOrderBy(newState);
            // console.log(newState);
        };
    };

    const customArrow = (order: boolean): JSX.Element => {
        return order ? <BsArrowDown /> : <BsArrowUp />;
    };

    const getUser = (email: string): string => {
        return '@' + email.replace('@example.com', '')
            .split(".").reverse()
            .map(str => str.slice(0, 4))
            .join(".");
    };

    const filteredUsers = useMemo(() => {
        const { field, value } = filterBy;
        if (!value) return props.users;
        switch (field) {
            case 'name':
                return [...props.users].filter(user => {
                    // console.log(user[field].includes(value))
                    return user.fullname.normalize('NFD')
                        .replace(/\p{Diacritic}/gu, '').toLowerCase()
                        .includes(value.normalize('NFD')
                            .replace(/\p{Diacritic}/gu, ''));
                });
            case 'country':
                return [...props.users].filter(user => {
                    // console.log(user[field].includes(value))
                    return countries[user.nat][1].toLowerCase().includes(value);
                });
            case 'id':
                return [...props.users].filter(user => {
                    // console.log(user[field].includes(value))
                    return user[field].toLowerCase().includes(value);
                });
            default:
                return props.users;
        }
    }, [props.users, filterBy]);

    const orderedUsers = useMemo(() => {
        const { field } = orderBy;
        switch (field) {
            case 'fullname':
            case 'nat':
            case 'id':
                return [...filteredUsers].sort((a, b) => {
                    return orderBy.order ? a[field].localeCompare(b[field]) :
                        b[field].localeCompare(a[field]);
                });
            case 'user':
                return [...filteredUsers].sort((a, b) => {
                    const [aUser, bUser] = [a.email, b.email].map(email => {
                        return getUser(email);
                    });
                    return orderBy.order ? aUser.localeCompare(bUser) :
                        bUser.localeCompare(aUser);
                });
            default:
                return [...filteredUsers];
        }
    }, [orderBy, filteredUsers]);

    return (
        <div className="flex w-10/12 flex-col h-full items-center ">
            <div className={main_btn_cls}>
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
                {
                    props.usersLoaded &&
                    <div className="flex gap-1 ">
                        <select name="filterBy" id="filterBy"
                            className={select_cls}
                            onChange={handleSelectChange}
                            value={filterBy.field}
                        >
                            <option value="fullame">Name</option>
                            <option value="id">ID</option>
                            <option value="country">Country</option>
                        </select>
                        <input type="text" className={input_cls}
                            onChange={handleSearchInput} />
                    </div>
                }
            </div>

            <div className="mb-2">
                {props.loading && <Puff stroke="#98ff98" />}
                {props.loadingNewUser && <Puff stroke="#A084E8" />}
            </div>

            {
                props?.users?.length > 0 && props.usersLoaded ?
                    <table className={table_cls}>
                        <thead className="font-bold">
                            <tr className={tr_thead_cls}>
                                <th onClick={handleHeaderTouch('id')}
                                >
                                    ID {orderBy.field === 'id'
                                        && customArrow(orderBy.order)}
                                </th>
                                <th
                                    onClick={handleHeaderTouch('nat')}
                                    data-title="Nationality"
                                >
                                    <BiWorld /> {orderBy.field === 'nat'
                                        && customArrow(orderBy.order)}
                                </th>
                                <th>
                                    <CgProfile /> Picture
                                </th>
                                <th onClick={handleHeaderTouch('fullname')}>
                                    Full Name {orderBy.field === 'fullname'
                                        && customArrow(orderBy.order)}
                                </th>
                                <th onClick={handleHeaderTouch('user')}>
                                    user <HiOutlineAtSymbol /> {
                                        orderBy.field === 'user'
                                        && customArrow(orderBy.order)
                                    }
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="[&>tr:hover]:bg-[--accent-hover]">
                            {[...orderedUsers]?.reverse()?.map((user: User) => {
                                const [flag = '🏴‍☠️', country = user.nat] =
                                    countries[user.nat];
                                return (
                                    <tr key={user.id} className="[&>td]:p-1.5">
                                        <td>{user.id.slice(0, 5)}</td>
                                        <td data-title={country}>{flag}</td>
                                        <td align='center'
                                        >
                                            <img className={img_cls}
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
                                        <td>{getUser(user.email)}</td>
                                        <td>
                                            {user.id !== buttonFired && <button
                                                className={dlt_btn_cls}
                                                onClick={() =>
                                                    ownHandleDelete(user.id)
                                                }
                                                data-title='Delete User'
                                            >
                                                <TrashIcon />
                                            </button>
                                            }
                                            {
                                                user.id === buttonFired &&
                                                <Puff stroke="#98ff98" />
                                            }
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


// Tailwind classes
const table_cls = 'w-4/5 table-auto font-karla font-medium mb-[50px] [&>*:last-child]:border-b-2 [&>*:last-child]:border-b-[--border] [&>thead>tr]:border-b-2 [&>thead>tr]:border-b-[--border] [&>thead>tr]:border-t-2 [&>thead>tr]:border-t-[--border] border-l border-l-[--border] border-r border-r-[--border]';
const tr_thead_cls = '[&>th]:border-bottom [&>th]:p-3 [&>th]:border-[--border]';
const img_cls = 'rounded-full border-2 border-[#3178c6]';
const dlt_btn_cls = 'border-2 border-[--border] bg-[#D21312] rounded-full p-1.5 hover:bg-[#F94C10]';
const select_cls = 'rounded font-karla bg-[#3178c6] text-center bg-[#3178c688] border-[#3178c6] border-2 px-1';
const main_btn_cls = 'gap-16 flex justify-center mb-5 [&>button]:border-2 [&>button]:border-[#3178c6] [&>button]:bg-[#3178c688] [&>button]:font-karla [&>button:hover]:border-2 [&>button:hover]:bg-[#dfb01788] [&>button:hover]:border-[--accent]';
const input_cls = 'rounded h-full self-center text-center font-karla border-[#3178c6] border-2 px-1 text-black';
