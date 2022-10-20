import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import { UserContext } from "../contexts/userContext.js";


export default function App(){
    const [ config, setConfig ] = useState({});

    return (
        <>
        <BrowserRouter>
            <UserContext.Provider value={{config,setConfig}}>
                <Routes>

                </Routes>

            </UserContext.Provider>
        </BrowserRouter>
        </>
    )
};