import { UserBox, MenuBar, Title } from "../../Styles/TopMenuStyle.js";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { FcCollapse } from 'react-icons/fc';

export default function TopMenu(){
    const { profileImage } = useContext(UserContext);
    return(
        <MenuBar>
            <Title>linkr</Title>
            <UserBox> 
                <FcCollapse />
                <img alt='' src={profileImage} />
            </UserBox>
        </MenuBar>
    )
}