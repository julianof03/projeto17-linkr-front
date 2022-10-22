import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../styles/globalStyle";
import UserContext from "../context/userContext";

import SignUp from "../Components/signUp/SignUp";
import SignIn from "../Components/signIn/SignIn";

export default function App(){

    const [token, setToken] = useState('');
    const [user, setUser] = useState('');

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{
                token, setToken, user, setUser,
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<SignIn />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
};