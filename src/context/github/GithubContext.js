import React, {createContext, useState} from 'react';

const GithubContext = createContext();

export const GithubProvider = ({children}) => {

    const fetchUsers = async () => {
        const response = await fetch(`https://api.github.com/users`);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    };

    const searchUsers = async (text) => {
        const response = await fetch(`https://api.github.com/search/users?q=${text}`);
        const data = await response.json();
        setUsers(data.items);
        setLoading(false);
        // console.log(data.items);
    }

    const alert = () => {
        setalertText("Please enter github username");
        setInterval(() => setalertText(""), 3000);
    }

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [alertText, setalertText] = useState('');

    return (
        <GithubContext.Provider value={{users, loading, fetchUsers, searchUsers, alert, alertText}}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubContext;