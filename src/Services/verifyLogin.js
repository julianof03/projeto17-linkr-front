import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import GlobalContext from "../contexts/globalContext.js";

export default function VerifyLogin(){

    const {token, setToken} = useContext(GlobalContext);

    const navigate = useNavigate();
    console.log('to aqui')

    const tokenLs = localStorage.getItem("token");
    if(token===''){
        console.log('entrei')
        if(!tokenLs){
            console.log('oi')
            navigate('/signin');
            return;
        } else{
            setToken(tokenLs);
        };
    };
    return;
};