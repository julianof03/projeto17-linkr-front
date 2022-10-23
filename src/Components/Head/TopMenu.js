import React from "react";
import { useState, useEffect } from "react";
import { UserBox, MenuBar, Title, LogoutBox,StyledIcon } from "../../Styles/TopMenuStyle.js";
import GlobalContext from '../../contexts/globalContext.js';
import { useContext } from 'react';
import SearchBar from './SearchBar.js';
import { userImage, logOut } from '../../Services/api.js';


export default function TopMenu(){
    const [logout, setLogout] = useState(false);
    const [profileImage, setProfileImage] = useState('');
    const { config } = useContext(GlobalContext);

    

    useEffect(async()=>{
        try {
            const userData = await userImage(config);
            setProfileImage(userData.data.pictureUrl);
            } catch (error) {
            console.log(error);
            return;
        }
    },[])

    function cliked(){
        setLogout(!logout);
    };
    function logoutUser(){
        const body = {};
        console.log('biee')
        logOut(config, body);
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
