import React from "react";
import { useContext } from "react";
import  GlobalContext  from "../contexts/globalContext.js";

export default function keepToken(token){

    const { config,setConfig } = useContext(GlobalContext);

    setConfig({headers:{Authorization: `Bearer ${token}`}});

    localStorage.setItem("token",`${token}`);

    return;
}