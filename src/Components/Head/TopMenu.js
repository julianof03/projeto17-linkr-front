import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserBox, MenuBar, Title, LogoutBox,StyledIcon } from "../../Styles/TopMenuStyle.js";
import GlobalContext from '../../contexts/globalContext.js';
import SearchBar from './SearchBar.js';
import { userImage, logOut } from '../../Services/api.js';
import getConfig from "../../Services/getConfig.js";


export default function TopMenu(){
    const navigate = useNavigate();

    const token = localStorage.getItem("token") 
    const [logout, setLogout] = useState(false);
    const [profileImage, setProfileImage] = useState('');
    const { config, header,setHeader } = useContext(GlobalContext);



    useEffect(async ()=>{
        if (!header){
            return;
        } else{
            try {
                const userData = await userImage(getConfig(token));
                setProfileImage(userData.data.pictureUrl);
                console.log(userData.data.pictureUrl)
                } catch (error) {
                console.log(error);
                return;
            }
         }
    },[setHeader]);

    if (!header){
        return (<></>);
    };

    function cliked(){
        setLogout(!logout);
        console.log(profileImage)
    };
    function logoutUser(){
        const body = {};
        setHeader(false);
        logOut(config, body);
        navigate('/signin');

        
    };

    return(
        <div>
        <LogoutBox visible={logout} onClick={logoutUser}>
            <h3> Logout</h3>
        </LogoutBox>
        <SearchBar />
        <MenuBar>
            <Title>linkr</Title>
            <UserBox onClick={cliked} profileImage={profileImage}> 
                <StyledIcon isUp={logout}/>
                <div>
                </div>
            </UserBox>
        </MenuBar>
        </div>
    )
};
