import { useEffect, useState } from 'react';


export default () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, [theme]);

    return { theme, toggleTheme };

};
