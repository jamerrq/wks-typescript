import './styles/App.css';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers, deleteUsers, addRandomUser } from './actions';

// SVG Icons
import TsLogo from './icons/TsLogo';

// Components
import Switch from './components/Switch';
import UsersTable from './components/UsersTable';
import Footer from './components/Footer';

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
        try {
            await addRandomUser();
        } catch (err) {
            console.error(err);
            alert('Error connecting to database :(');
        }
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
        try {
            await fetchUsers();
        } catch (err) {
            console.error(err);
            alert('Error fetching users :(');
        }
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

    return (
        <div className={`App ${theme}`}>

            <h1 className="title">
                {"< "}
                <TsLogo width="1.5em" height="1.5em" fill="#3178c6" />
                {" Full Stack Workshop >"}
            </h1>

            <Switch handleSwitch={handleThemeChange} />

            <UsersTable
                users={props.users}
                loading={state.loading}
                loadingNewUser={state.loadingNewUser}
                handleDelete={handleDelete}
                handleAddRandomUser={handleAddRandomUser}
                handleFetchUsers={handleFetchUsers}
            />

            <Footer />

        </div>
    );

}

const mapStateToProps = (state: StoreState): { users: User[]; } => {
    return {
        users: state.users
    };
};


const connectedApp = connect(mapStateToProps,
    { fetchUsers, deleteUsers, addRandomUser })(App);
export default connectedApp;
