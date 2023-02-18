import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OnWork(){

  return (
    <Fixing>
      <p>Estamos em manutenção.</p>
      <LinkToSignIn to='/signin'>voltar</LinkToSignIn>
    </Fixing>
  );
}

const Fixing = styled.div` 
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: #151515;


P{
font-size: 43px;
color: #f6f6f6;
margin-bottom: 10px;
}


`;

const LinkToSignIn = styled(Link)` 

  font-size: 25px;
  color: #f6f6f6;
  text-decoration: underline;
  cursor: pointer;

`;