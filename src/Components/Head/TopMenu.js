import React from "react";
import { useState, useEffect } from "react";
import { UserBox, MenuBar, Title, LogoutBox,StyledIcon } from "../../Styles/TopMenuStyle.js";
import { UserContext } from "../../contexts/userContext";
import { useContext } from 'react';
import SearchBar from './SearchBar.js';
import { userImage, logOut } from '../../Services/api.js';


export default function TopMenu(){
    const [logout, setLogout] = useState(false);
    const [profileImage, setProfileImage] = useState('');

    const {config} = useContext(UserContext);

    useEffect(async()=>{
        try {
            //const userData = await userImage(config);
            //setProfileImage(userData.data.pictureUrl);
            setProfileImage('https://uploads.metropoles.com/wp-content/uploads/2021/08/24151411/scale-2-1024x683.jpg')
        } catch (error) {
            console.log(error);
            alert('Algo de errado aconteceu! :(');
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
