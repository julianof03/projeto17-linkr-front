import styled from "styled-components";
import {BiSearchAlt} from "react-icons/bi";

const SearchBox = styled.div`
    width: 550px;
    height: 50px;
    border-radius: 5px;
    background-color: #fff;
    position: fixed;
    left: calc(50vw - 275px);
    top: 15px;
    z-index: 2;
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
    left: calc(50vw + 245px);
    top: 30px;
    z-index: 3;
`
export{SearchBox, SearchIcon}