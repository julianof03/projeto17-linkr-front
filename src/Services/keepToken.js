import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext.js";

export default function keepToken(token){

    const { config,setConfig } = useContext(UserContext);

    setConfig({headers:{Authorization: `Bearer ${token}`}});

    localStorage.setItem("token",`${token}`);

    return;
}