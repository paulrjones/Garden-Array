import {createContext} from 'react';

const UserContext = createContext({
    user: {},
    first: '',
    last: '',
    username: '',
    password: '',
    email: '',
    isLoggedIn: false, 
    handleInputChange: () => {},
    handleRegisterUser: () => {},
    handleSignInUser: () => {}
});

export default UserContext;