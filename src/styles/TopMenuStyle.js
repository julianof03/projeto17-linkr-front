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
`;

export{MenuBar};