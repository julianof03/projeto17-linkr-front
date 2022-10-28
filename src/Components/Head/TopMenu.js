import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserBox, MenuBar, Title, LogoutBox, StyledIcon, ProfileImg } from "../../Styles/TopMenuStyle.js";
import GlobalContext from '../../contexts/globalContext.js';
import SearchBar from './SearchBar.js';
import { userImage, logOut } from '../../Services/api.js';
import getConfig from "../../Services/getConfig.js";


export default function TopMenu() {
    const navigate = useNavigate();

    const [logout, setLogout] = useState(false);
    const [profileImage, setProfileImage] = useState('');
    const { header, setHeader, token, setToken } = useContext(GlobalContext);


    useEffect(async () => {

        const tokenLs = localStorage.getItem("token");

        if (token === '') {
            if (!tokenLs) {
                navigate('/signin');
                return;
            }
            setToken(`${tokenLs}`);
        }

        try {
            setProfileImage((await userImage(getConfig(tokenLs))).data);
            console.log(profileImage)

        } catch (error) {

            if (error.response.status === 401) {
                navigate('/signin');
            };
            return;

        }

    }, [setHeader, setProfileImage]);

    if (!header) {
        return (<></>);
    };

    function cliked() {
        setLogout(!logout);
    };
    async function logoutUser() {
        const body = {};
        setHeader(false);
        console.log(token)
        try {
            const logout = await logOut(getConfig(token), body);
            setLogout(!logout);
            navigate('/signin');

        } catch (error) {
            console.log(error)
        }

    };
    function goToUserPage(){
        const userId= localStorage.getItem("userId");
        navigate(`/users/${userId}`);
    }
    return (
        <div>
            <LogoutBox visible={logout} onClick={logoutUser}>
                <h3> Logout</h3>
            </LogoutBox>
            <SearchBar />
            <MenuBar>
                <Title onClick={() => navigate('/timeline')}>linkr</Title>
                <UserBox onClick={cliked}>
                    <StyledIcon isup={logout} />
                    <ProfileImg profileImage={profileImage} onClick={goToUserPage}/>
                </UserBox>
            </MenuBar>
        </div>
    )
};
