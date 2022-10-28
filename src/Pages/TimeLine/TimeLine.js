import PropagateLoader from "react-spinners/PropagateLoader";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import GlobalContext from "../../contexts/globalContext.js"
import FormBox from "../../Components/FormBox/FormBox.js";
import Trending from "../../Components/Trending/Trending.js";
import DeleteBox from "../../Components/DeleteScreen/deleteScreen.js";
import getConfig from "../../Services/getConfig.js";
import { getTimeLine } from "../../Services/api.js";
import RenderPosts from "./Functions/renderPosts.js";
import AlertNewPosts from "../../Components/AlertNewPosts/AlertNewPosts.js";

export default function TimeLine() {
  const { reRender, setReRender, setHeader, deleteScreen} = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const [n, setN] = useState(0);
  //useState
  const [posts, setPosts]   = useState({ array: [], size: 0, status: false });
  const [loader, setLoader] = useState(true)
  // const [numbNewPosts, setNumbNewPosts] = useState(0)
  // const [youngestPost, setYoungestPost] = useState({})
  setHeader(true);

  useEffect(() => {
    getTimeLine(getConfig(token)).then((res) => {
      setPosts({
        array: res.data.slice(0, n + 5),
        size: res.data.length,
        status: true
      });
      setLoader(false)
      // setYoungestPost(posts.array[0])
      // interval()
    });
  }, [reRender, n]);

  return (
        (<Wrapper>
          {deleteScreen.status ? <DeleteBox /> : <></>}
          <MainContent>
              <Title> <h1>timeline</h1> <AlignBox></AlignBox></Title>
              {/* {!youngestPost ? <></> : <AlertNewPosts youngestPost={youngestPost} /> } */}
              <FormBox />
              {loader ? <PropagateLoader color="#b3b3b3" /> : <></>}
              {posts.status ? <RenderPosts postsList={posts.array} /> : <></>}
          </MainContent>
          <AsideContent>
              <TrendingWrapper> 
                <Trending /> 
              </TrendingWrapper>
          </AsideContent>
        </Wrapper>))}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-top: 80px;
  background-color: #333333;
  @media only screen and (max-width:800px) {
        margin-top:80px;
    }

`;
const AsideContent = styled.div`
  height: 500px;
  width: 30vw;
  @media only screen and (max-width:800px) {
        display: none;
    }
`;
const MainContent = styled.div`
width: 70vw;

display: flex;
flex-direction: column;
justify-content: right;
align-items: center;
margin-left: calc(70vw-610px);

    p{
        margin-top:30px;
        color:white;
    }

    @media only screen and (max-width:800px) {
    width: 100vw;
    }

    /* background-color: black; */
`
const Title = styled.div`
width: 610px;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 10px;
margin-top: 10px;

h1{
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Oswald';
}
@media only screen and (max-width:800px) {
    width: 100vw;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    }
`;
const TrendingWrapper = styled.div`
  height: 100%;
  top: 50px;
`;

const AlignBox = styled.div`
width: 30px;
height: 10px;
background-color:transparent;
`