import styled from "styled-components";

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
`;

const Title = styled.h2`
    font-size: 49px;
    color: #fff;
    font-family: Passion One;
`;

const UserBox = styled.div`
    display: flex;
    width: 85px;
    align-items: center;
    justify-content: space-between;

    img{
        width: 55px;
        height: 55px;
        background-image: ${({ profileImage }) => `url(${profileImage})`};
        background-size: cover;
        background-position: center;
        border-radius:50%;
    }

    react-icons{
        font-size:36px;
        color:#fff;
    }
`;


export{MenuBar, UserBox, Title};