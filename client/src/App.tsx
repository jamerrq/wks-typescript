import React from 'react';
import './App.css';

interface AppProps {
    title: string;
};


function App({ title }: AppProps): JSX.Element {
    return (
        <div>Henry Workshop - {title}</div>
    );
};

export default App;
