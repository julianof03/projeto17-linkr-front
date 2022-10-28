import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getHashtagPosts } from "../Services/api.js";
import getConfig from "../Services/getConfig.js";
import GlobalContext from "../contexts/globalContext.js";
import RepostBox from "../Components/RepostScreen/repostScreen.js";
import DeleteBox from "../Components/DeleteScreen/deleteScreen.js";
import PropagateLoader from "react-spinners/PropagateLoader";
import RenderPosts from "./TimeLine/Functions/renderPosts.js";
export default function Hashtag() {
  const { setHeader } = useContext(GlobalContext);
  setHeader(true);
  const token = localStorage.getItem("token");
  const [loader, setLoader] = useState(true)
  const { hashtag } = useParams();
  const {
    reRender,
    setReRender,
    hashposts,
    setHashposts,
    setClicked,
    clicked,
    repost,
    deleteScreen,
  } = useContext(GlobalContext);
  const [n, setN] = useState(0);

  useEffect(() => {
    setClicked(false);

    getHashtagPosts(getConfig(token), hashtag)
      .then((res) => {
        setHashposts({
          array: res.data.slice(n, n + 50),
          size: res.data.length,
          status: true
        });
        setLoader(false)

      })
      .catch((res) => {
        console.log("algo deu errado");
      });
  }, [clicked, reRender]);

  function nextPage() {
    if (n + 50 > hashposts.size) {
      let add = hashposts.size - n;

      if (add > 0) {
        setN(n + add);
      }
      return;
    }

    setN(n + 50);

    // window.scrollTo(0, 0)
    setReRender(!reRender);
  }

  return (
    <>
      <Wrapper>
        {deleteScreen.status ? <DeleteBox /> : <></>}
        {repost.status ? <RepostBox /> : <></>}
        <MainContent>
          <Title>
            <h1># {hashtag}</h1>
          </Title>
          {loader ? <PropagateLoader color="#b3b3b3" /> : <></>}
          {hashposts.status ? <RenderPosts postsList={hashposts.array} /> : <></>}
        </MainContent>
        <AsideContent>
          <TrendingWrapper>
            <Trending />
          </TrendingWrapper>
        </AsideContent>
      </Wrapper>
    </>
  );
}

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