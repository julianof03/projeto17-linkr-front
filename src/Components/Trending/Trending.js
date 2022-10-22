import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const hashtagsArray = [
  "#hashtag14",
  "javascript",
  "react",
  "react-native",
  "material",
  "web-dev",
  "mobile",
  "css",
  "html",
  "node",
  "sql",
];

export default function Trending() {
  useEffect(() => {
    const promise = axios.get(`https://projeto17linkr.herokuapp.com/hashtag/`);
    promise.then((res) => {
      console.log(res.data);
    });

    promise.catch((res) => {
      console.log("algo deu errado");
    });
  }, []);

  const navigate = useNavigate();

  function goHashtagPage(h) {
    if (h !== null) {
      navigate(`/hashtag/${h}`);
    }
  }
  return (
    <TrendingWrapper>
      <h2>Trending</h2>
      <Line />
      {hashtagsArray.map((h) => (
        <p onClick={() => goHashtagPage(h)}># {h}</p>
      ))}
    </TrendingWrapper>
  );
}

const TrendingWrapper = styled.div`
  width: 300px;
  background-color: #171717;
  border-radius: 16px;
  padding: 15px;
  margin-left: 15px;
  margin-top: 8vh;

  h2 {
    font-size: 27px;
    font-weight: 700;
    color: #fff;
    font-family: "Oswald";
  }

  p {
    font-size: 19px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid #484848;
  margin: 5px 0 5px 0;
`;
