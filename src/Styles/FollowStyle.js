import styled from "styled-components";

const FollowBox = styled.div`
    width: 115px ;
    height: 30px;
    border-radius: 5px;
    font-family: Lato;
    font-size: 14px;
    color: ${(props) => props.follow? '#fff':'#1877F2'};
    background-color: ${(props) => props.follow? '#1877F2':'#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-left: 200px;
`
export {FollowBox};