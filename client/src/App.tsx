import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import * as actions from './actions';

// Styles
import './styles/App.css';
// SVG Icons
import TsLogo from './icons/TsLogo';

// Components
import {
    Switch, UsersTable, Footer, Description,
} from './components/mod';

// Dark Mode
import useTheme from './hooks/useTheme';


const App = (props: AppProps): JSX.Element => {

    const { fetchUsers, deleteUsers, addRandomUser } = props;

    const { theme, toggleTheme } = useTheme();

    const [state, setState] = useState({
        loading: false,
        loadingNewUser: false,
        usersLoaded: false,
    });

    const [firstRender, setFirstRender] = useState(false);

    useEffect(() => {
        // fetchUsers();
    }, [fetchUsers]);

    const handleDelete = async (id: string) => {
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
            loading: true,
        });

        try {
            await fetchUsers();
            setFirstRender(true);
        } catch (err) {
            console.error(err);
            alert('Error fetching users :(');
        }

        setState({
            ...state,
            loading: false,
        });

    };

    const showDescription = () => {
        setFirstRender(state => !state);
    };

    return (
        <div className={`App ${theme}`}>

            <h1 className="title">
                {"< "}
                <a onClick={showDescription}>
                    <TsLogo width="1.5em" height="1.5em" fill="#3178c6" />
                </a>
                {" Full Stack Workshop />"}
            </h1>

            <Switch
                handleSwitch={handleThemeChange}
                labelContent={theme === "light" ? "Dark Mode" : "Light Mode"}
            />

            {firstRender ? null : <Description />}

            <UsersTable
                users={props.users}
                loading={state.loading}
                loadingNewUser={state.loadingNewUser}
                usersLoaded={firstRender}
                handleDelete={handleDelete}
                handleAddRandomUser={handleAddRandomUser}
                handleFetchUsers={handleFetchUsers}
            />

            <Footer />
        </div>
    );

};

const mapStateToProps = (state: StoreState): { users: User[]; } => {
    return {
        users: state.users
    };
};


const connectedApp = connect(mapStateToProps, actions)(App);
export default connectedApp;
