"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import type { IUser, IAuthContext } from "../types/index.types";
import api from "../axiosApi";

const AuthContext = createContext<IAuthContext>({
    isLoading: false,
    user: null,
    refreshUser: () => {},
});

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthProvider = (props: AuthContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUser | null>(null);

    const refreshUser = async () => {
        setIsLoading(() => true);

        const apiResponse = await api("GET", "auth/me");

        if (apiResponse.action === null) {
            setUser(null);
        } else if (apiResponse.action === false) {
            setUser(null);
            localStorage.removeItem("userData");
        } else {
            setUser(apiResponse.data as unknown as IUser);
            localStorage.setItem(
                "userData",
                JSON.stringify(apiResponse.data)
            );
        }

        setIsLoading(() => false);
    };

    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                user,
                refreshUser,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const useAuth = (): IAuthContext =>{
    const authContext = useContext(AuthContext);
    if(!authContext) throw new Error("AUTH CONTEXT UNDEFINED.");

    return authContext;
}

export { AuthContext, AuthProvider,useAuth };
