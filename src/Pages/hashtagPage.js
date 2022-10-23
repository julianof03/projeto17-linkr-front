import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getHashtagPosts } from "../Services/api.js";
import GlobalContext from "../contexts/globalContext.js";

export default function Hashtag() {

  const { setHeader } = useContext(GlobalContext);
  setHeader(true);

  const { hashtag } = useParams();
  const { reRender, setReRender } = useContext(GlobalContext);
  const [n, setN] = useState(0);
  const [posts, setPosts] = useState({
    array: [],
    size: 0,
  });

  useEffect(() => {
    getHashtagPosts(hashtag).then((res) => {
      setPosts({
        array: res.data.slice(n, n + 50),
        size: res.data.length,
      });
    });

    getHashtagPosts(hashtag).catch((res) => {
      console.log("algo deu errado");
    });
  }, [reRender]);

  console.log(posts);
  function nextPage() {
    // console.log(arraySize)
    console.log(posts.size, n);
    if (n + 50 > posts.size) {
      let add = posts.size - n;

      if (add > 0) {
        setN(n + add);
      }
      return;
    }

    setN(n + 50);
    console.log("carregar página");

    // window.scrollTo(0, 0)
    setReRender(!reRender);
  }

  return (
    <>
      <Wrapper>
        <MainContent>
          <Title>
            <h1># {hashtag}</h1>
          </Title>
          {posts.array.length === 0
            ? ""
            : posts.array.map((value, index) => (
                <>
                  <Post
                    key={index}
                    username={value.username}
                    img={value.img}
                    text={value.text}
                    link={value.link}
                    likesQtd={value.likesQtd}
                    liked={value.liked}
                  />
                  {/* <NextPage
                    onClick={() => {
                      nextPage();
                    }}
                  >
                    Carregar mais
                  </NextPage> */}
                </>
              ))}
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
  padding-top: 115px;
  background-color: #333333;
`;
const AsideContent = styled.div`
  height: 500px;
  width: 21vw;
  /* position:relative; */
  /* background-color: violet; */
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 610px;
  /* background-color: black; */
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 45px;
  h1 {
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: "Oswald";
  }
`;
const TrendingWrapper = styled.div`
  height: 100%;
  /* position:absolute; */
  top: 50px;
  /* background-color: aqua; */
`;
const NextPage = styled.div`
  width: 200px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: black;
  border-radius: 10px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
