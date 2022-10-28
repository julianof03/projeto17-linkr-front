import styled from "styled-components";

const FollowBox = styled.div`
    width: 115px ;
    height: 40px;
    border-radius: 5px;
    font-family: Lato;
    font-size: 14px;
    color: ${(props) => props.follow? '#fff':'#1877F2'};
    background-color: ${(props) => props.follow? '#1877F2':'#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-right: calc(30vw-300px);
    cursor: pointer;
    pointer-events: ${(props) => props.canFollow};
    @media only screen and (max-width:800px) {
    display: none;
    }
`
const FollowBoxMobile = styled.div`
    display: none;
    @media only screen and (max-width:800px) {
    pointer-events: ${(props) => props.canFollow};
    width: 115px ;
    height: 40px;
    border-radius: 5px;
    font-family: Lato;
    font-size: 14px;
    color: ${(props) => props.follow? '#fff':'#1877F2'};
    background-color: ${(props) => props.follow? '#1877F2':'#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    }
`
export {FollowBox, FollowBoxMobile};