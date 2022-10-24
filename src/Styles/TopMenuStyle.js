import styled from "styled-components";
import { VscChevronUp } from 'react-icons/vsc';

const MenuBar = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    background-color: #151515;
    z-index: 1;
`;

const Title = styled.h2`
    font-size: 49px;
    color: #fff;
    font-family: Passion One;
    cursor: pointer;
`;

const UserBox = styled.div`
    display: flex;
    width: 90px;
    align-items: center;
    justify-content: space-between;

`;

const ProfileImg = styled.div`
        width: 55px;
        height: 55px;
        background-image: url(${(props) => props.profileImage});
        background-size: cover;
        background-position: center;
        border-radius:50%;
        margin-right: 10px;
        
`

const LogoutBox = styled.div`
    width: 120px;
    height: 50px;
    border-radius: 0 0 0 20px;
    background-color: #151515;
    display: flex;
    visibility: ${(props) => props.visible ? 'visible':'hidden'};
    align-items: center;
    justify-content: center;
    position:fixed;
    right: 0;
    top: 80px;
    color: #fff;

    h3{
        font-family: Lato;
        color: #fff;
        font-size: 17px;
    }

`
const StyledIcon = styled(VscChevronUp)`
color: #fff;
transform: scale(2);
rotate:${(props)=> props.isup? '0':'180deg'};

cursor: pointer;
`


export{MenuBar, UserBox, Title, LogoutBox,StyledIcon, ProfileImg};