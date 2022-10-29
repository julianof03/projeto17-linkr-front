import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import GlobalContext from "../contexts/globalContext.js";

export default function VerifyLogin(){

    const {token, setToken} = useContext(GlobalContext);

    const navigate = useNavigate();

    const tokenLs = localStorage.getItem("token");
    if(token===''){
        if(!tokenLs){
            navigate('/signin');
            return;
        } else{
            setToken(tokenLs);
        };
    };
    return;
}