import styled from "styled-components";

export default function Trending() {


    return (
        <TrendingWrapper>
            <h2>Trending</h2>
            <Line />
            <p># javascript</p>
            <p># react</p>
            <p># react-native</p>
            <p># material</p>
            <p># web-dev</p>
            <p># mobile</p>
            <p># css</p>
            <p># html</p>
            <p># node</p>
            <p># sql</p>
        </TrendingWrapper>
    )
}

const TrendingWrapper = styled.div`
width: 300px;
background-color: #171717;
border-radius:16px;
padding: 15px;
margin-left: 15px;

h2{
    font-size: 27px;
    font-weight: 700;
    color: #fff;
    font-family: 'Oswald';
}

p{
    font-size: 19px;
    font-weight: 500;
    color: #fff;
}

`;

const Line = styled.div`
width: 100%;
height: 1px;
border: 1px solid #484848;
margin: 5px 0 5px 0;

`