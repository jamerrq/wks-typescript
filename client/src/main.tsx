import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App.tsx';
import store from '../src/store/';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
