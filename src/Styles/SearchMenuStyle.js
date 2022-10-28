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

    @media only screen and (max-width:800px) {
        width: calc(90vw);
        position: fixed;
        left: calc(5vw);
        top: 90px;
        z-index: 3;

    }
`

const SearchIcon = styled(BiSearchAlt)`
    color: #C6C6C6;
    transform: scale(2);
    position: fixed;
    left: calc(70vw);
    top: 30px;
    z-index: 4;

    cursor: pointer;

    @media only screen and (max-width:800px) {
        position: fixed;
        left: calc(85vw);
        top: 110px;
        z-index: 4;

    }
`

const FoundUsers = styled.div`
    width: calc(50vw);
    background-color: #E7E7E7;
    position: fixed;
    top:60px;
    left: calc(25vw);
    display: flex;
    flex-direction: column;
    z-index: 2;
    border-radius: 0 0 20px 20px;

    cursor: pointer;
    @media only screen and (max-width:800px) {
        width: calc(90vw);
        position: fixed;
        left: calc(5vw);
        top: 135px;
        z-index: 2;

    }

`
const FollowUser = styled.div`
    display:${(props) => props.isFollowing};
    color: #C5C5C5;
    font-size: 13px;
    font-family: Lato;
    margin-left: 5px;
`

const UsersImage = styled.div`
        display: flex;
        height: 40px;
        width: calc(50vw);
        align-items: center;
        margin: 10px;
        border-top: 1px gray;

        @media only screen and (max-width:800px) {
        width: calc(90vw);
    }
`
const UsersName = styled.p`
    color: #515151;
    font-size: 15px;
    margin-left: 10px;
    `

const ImageUsers = styled.div`
        width: 40px;
        height: 40px;
        background-image: url(${(props) => props.profileImage});
        background-size: cover;
        background-position: center;
        border-radius:50%;
        margin-right: 10px;
        
`
export{SearchBox, FollowUser, SearchIcon, UsersImage, FoundUsers, ImageUsers, UsersName}