import styled from "styled-components";
import {BiSearchAlt} from "react-icons/bi";

const SearchBox = styled.div`
    width: calc(50vw);
    height: 50px;
    border-radius: 5px;
    background-color: #fff;
    position: fixed;
    left: calc(25vw);
    top: 15px;
    z-index: 3;
    display: flex;
    align-items: center;

    input{
        width: 400px;
        margin-left: 10px;
        ::placeholder{
            font-family: Lato;
            font-size: 15px;
            color: #C6C6C6;
            text-align: left;
        }
        margin: auto 10px;
        border: none;
        background-color: transparent;
    }

`

const SearchIcon = styled(BiSearchAlt)`
    color: #C6C6C6;
    transform: scale(2);
    position: fixed;
    left: calc(70vw);
    top: 30px;
    z-index: 4;
`

const FoundUsers = styled.div`
    width: calc(50vw);
    padding: 0 10px 10px 10px;
    background-color: #E7E7E7;
    position: fixed;
    top:60px;
    left: calc(25vw);
    z-index: 2;

    div{
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: left;
        margin-top: 5px;
        color: #515151;
        font-size: 15px;
    }
`

const usersImage = styled.div`
        width: 40px;
        height: 40px;
        background-image: url(${(props) => props.profileImage});
        background-size: cover;
        background-position: center;
        border-radius:50%;
        margin-right: 10px;
`
export{SearchBox, SearchIcon, usersImage, FoundUsers}