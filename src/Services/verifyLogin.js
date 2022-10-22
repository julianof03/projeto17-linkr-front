import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from "../contexts/globalContext.js";

export default function VerifyLogin(){

    const {config,setConfig} = useContext(GlobalContext);

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    if(Object.keys(config).length===0){
        if(!token){
            navigate('/login');
            return;
        } else{
            setConfig({headers:{Authorization:`Bearer ${token}`}});
        };
    };
    return;
};