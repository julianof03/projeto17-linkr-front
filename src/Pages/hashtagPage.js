import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHashtagPosts } from "../Services/api.js";
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext.js";

const array = [
  {
    username: "gojo satoru",
    img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg",
    text: "textinho bacanozo",
    link: "link",
    likesQtd: 15,
    liked: true,
  },
  {
    username: "gojo satoru",
    img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg",
    text: "outro texto",
    link: "link",
    likesQtd: 15,
    liked: false,
  },
  {
    username: "gojo satoru",
    img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg",
    text: "textinho bacanozo",
    link: "link diferente",
    likesQtd: 15,
    liked: true,
  },
  {
    username: "gojo satoru",
    img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg",
    text: "textinho bacanozo",
    link: "link",
    likesQtd: 15,
    liked: false,
  },
];

export default function Hashtag() {

  const { setHeader } = useContext(GlobalContext);
  setHeader(true);

  const { hashtag } = useParams();
  const [hashtagPosts, setHashtagPosts] = useState([]);

  useEffect(() => {
    getHashtagPosts(hashtag).then((res) => {
      console.log(res.data)
      setHashtagPosts(res.data);
    });

    getHashtagPosts(hashtag).catch((res) => {
      console.log("algo deu errado");
    });
  }, []);

  return (
    <Wrapper>
      <LeftWrapper>
        <Title>
          <h1># {hashtag}</h1>
        </Title>

        <PostWrapper>
          {hashtagPosts.length === 0
            ? ""
            : hashtagPosts.map((value) => (
                <Post
                  username={value.username}
                  img={value.img}
                  text={value.text}
                  link={value.link}
                  likesQtd={value.likesQtd}
                  liked={value.liked}
                />
              ))}
        </PostWrapper>
      </LeftWrapper>

      <RightWrapper>
        <TrendingWrapper>
          <Trending />
        </TrendingWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  background-color: #333333;
  display: flex;
  justify-content: center;
`;
const RightWrapper = styled.div`
  height: 500px;
  width: 21vw;

  position: relative;
`;
const LeftWrapper = styled.div`
  width: 42vw;

  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8vh;

  h1 {
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: "Oswald";
  }
`;
const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */

  border-radius: 10px;
`;
const TrendingWrapper = styled.div`
  height: 100%;
  /* background-color: aqua; */
  position: absolute;
  top: 50px;
`;
