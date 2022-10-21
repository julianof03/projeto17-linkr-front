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
`;

const UserBox = styled.div`
    display: flex;
    width: 90px;
    align-items: center;
    justify-content: space-between;

    div{
        width: 55px;
        height: 55px;
        background-image: url(${(props) => props.profileImage});
        background-size: cover;
        background-position: center;
        border-radius:50%;
    }
`;
const LogoutBox = styled.div`
    width: 120px;
    height: 50px;
    border-radius: 0 0 0 20px;
    background-color: #151515;
    display: ${(props) => props.visible ? 'flex':'none'};
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
rotate:${(props)=> props.isUp? '0':'180deg'};
`


export{MenuBar, UserBox, Title, LogoutBox,StyledIcon};