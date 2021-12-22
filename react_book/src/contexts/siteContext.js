import React from 'react';





export default React.createContext({ 
    isLoggedIn: false,

    handleLogin: (user) => {},

    handleLogout: () => {},

    updateLogin: () => {},
 });