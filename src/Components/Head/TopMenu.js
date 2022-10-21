import { VscChevronUp } from 'react-icons/vsc';
import {IconContext} from "react-icons"
import React from "react";
import { useState } from "react";
import { UserBox, MenuBar, Title, LogoutBox,StyledIcon } from "../../Styles/TopMenuStyle.js";
//import { UserContext } from "../../contexts/userContext";
import SearchBar from './SearchBar.js';


export default function TopMenu(){
    //const { profileImage } = useContext(UserContext);
    const [logout, setLogout] = useState(false);

    function cliked(){
        setLogout(!logout);
    };
    function logoutUser(){
        return console.log('existo')
    }

    return(
        <div>
        <SearchBar />
        <MenuBar>
            <Title>linkr</Title>
            <UserBox onClick={cliked} profileImage="https://miro.medium.com/max/480/1*Iohnw2aOQ5EBghVoqKA7VA.png"> 
                <StyledIcon isUp={logout}/>
                <div>
                </div>
            </UserBox>
        </MenuBar>
        <LogoutBox visible={logout} OnClick={logoutUser}>
            <h3> Logout</h3>
        </LogoutBox>
        </div>
    )
};
