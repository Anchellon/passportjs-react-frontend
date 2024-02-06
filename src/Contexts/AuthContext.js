import React, { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProivder(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const initialValue = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
    };
    return <AuthContext.Provider value={initialValue}></AuthContext.Provider>;
}
