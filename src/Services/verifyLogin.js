import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { UserContext } from "../contexts/userContext.js";

export default function VirifyLogin(){

    const {config,setConfig} = useContext(UserContext);

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