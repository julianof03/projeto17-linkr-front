import { deletePost } from "../../Services/api"
import getConfig from "../../Services/getConfig"
import { useContext } from "react";
import GlobalContext from "../../contexts/globalContext";
import styled from "styled-components";

export default function DeleteBox() {
    const { 
      deleteScreen, setDeleteScreen,
      reRender, setReRender } = useContext(GlobalContext);
    const token = localStorage.getItem("token");

    function AxiosDeletePost(postId, token) {
        deletePost(postId, getConfig(token))
          .then(() => setReRender(!reRender))
          .catch((error) => console.log('error axiosDeletePost', error))
        setDeleteScreen({ postId: '', status: false })
      }

    return (
      <FullScreen>
        <Box>
          <h1> Are you sure you want to delete this post? </h1>
          <DeleteOpcions>
            <NoGoBack onClick={() => setDeleteScreen({ postId: '', status: false })}>
              <span>No, go back</span>
            </NoGoBack>
            <YesDeleteIt onClick={() => { AxiosDeletePost(deleteScreen.postId, token) }}>
              <span>Yes, delete it</span>
            </YesDeleteIt>
          </DeleteOpcions>
        </Box>
      </FullScreen>
    )
  }

const DeleteOpcions = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
`;
const NoGoBack = styled.button`
  display: flex;
  width: 134px;
  height: 37px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  span {
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #1877f2;
  }
  background-color: #ffffff;
`;
const YesDeleteIt = styled.button`
  display: flex;
  width: 134px;
  height: 37px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  span {
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
  background-color: #1877f2;
`;
const FullScreen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 2;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
`;
const Box = styled.div`
  height: 262px;
  width: 597px;
  border-radius: 50px;
  background-color: #333333;
  padding: 35px 110px 30px 110px;
  h1 {
    font-family: Lato;
    font-size: 34px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
`;

