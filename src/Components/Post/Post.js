import styled from "styled-components";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { ReactTagify } from "react-tagify";
import React from "react";
import { useContext, useEffect, useState } from "react";
import mql from "@microlink/mql";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import GlobalContext from "../../contexts/globalContext";
import PropagateLoader from "react-spinners/PropagateLoader";
import { OnClickEditPost } from "./Functions/editPost";
import EditInput from "./Functions/editInput";
import { GoToTag } from "./Functions/goToTag";
import { updateLike, updateDislike } from "../../Services/api.js";
import getConfig from "../../Services/getConfig.js";
import { ChatSection, CallChat } from "./Functions/comment";
import RepostHeader from "../RepostScreen/repostHeader.js";
export default function Post({
  username, postUserId,
  userImg, text,
  link, likesQtd,
  postId, userLiked,
  repostCount, repostId, repostUser, commentCount
}) {
  //useState
  const [like, setLike] = useState(false);
  const [message, setMessage] = useState("");
  const [urlMetadataOBJ, setUrlMetadataOBJ] = useState({});
  const [form, setForm] = useState({ link: "", text: "" });
  const [chatState, setChatState] = useState(false);
  const [allComments, setAllComments] = useState('');
  //GlobalContext
  const {
    setDeleteScreen, editPost,
    SetEditPost, repost,
    setRepost, postId_global,
    setPostId_global, reRender,
    setReRender,
  } = useContext(GlobalContext);
  // generic const declaration
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const handleChange = (event) => {
    if (!message) {
      setMessage(text);
    }
    setMessage(event.target.value);
  };

  useEffect(async () => {
    SetEditPost({ postId: "", status: false });
    if (!message) {
      setMessage(text);
    }

    if (userLiked) {
      setLike(true);
    }

    const { data } = await mql(link, {
      data: {
        avatar: {
          selector: "#avatar",
          type: "image",
          attr: "src",
        },
      },
    });
    setUrlMetadataOBJ(data);
  }, []);

  function HandleLike(like) {
    const body = { postId };

    try {
      if (!like) {
        // console.log('like')
        updateLike(getConfig(token), body);
        setReRender(!reRender);
      } else {
        // console.log('dislike')
        updateDislike(getConfig(token), body);
        setReRender(!reRender);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if(!urlMetadataOBJ.url){
    return(
      <PropagateLoader color="#b3b3b3" />
    )
  }

  return (
    <>
        {console.log('postUser por post : ', repostUser)}
        {repostUser === null ? <></> : <RepostHeader repostUser = {repostUser}/>}        
        <PostHTML style = {repostUser ? { borderRadius: "0 0 16px 16px" } : {borderRadius: "16px 16px 16px 16px"} } >
          <ImgWrapper like={like}>
            <img src={userImg} />
            <LikeWrapper>
          <div className="Register" data-tip data-for="registerTip">
            {like ? (
              <BsHeartFill
                size="20px"
                onClick={() => {
                  setLike(false);
                  HandleLike(like);
                }}
              />
            ) : (
              <BsHeart
                size="20px"
                onClick={() => {
                  setLike(true);
                  HandleLike(like);
                }}
              />
            )}

            <ReactTooltip id="registerTip" place="bottom" backgroundColor="#FFFFFF">
              <p style={{ color: "black" }}>Tooltip for the register button</p>
            </ReactTooltip>
          </div>

          <p>
            {!likesQtd ? "0 likes" : <>{likesQtd > 1 ? <p>{likesQtd} likes</p> : "1 like"}</>}
          </p>

            </LikeWrapper>
            <ButtomWrapper>
              <BiRepost size="30px"
                        onClick={() => setRepost({ status: true, postId: postId, userId: userId })}/>
              <p> {repostCount === null ? "0 re-post" : <>{repostCount > 1 ? <p>{repostCount} re-posts</p> : "1 re-post"}</>} </p>
              <p className="Comentario">{commentCount === null ? "0 Comments" : <>{commentCount > 1 ? <p>{commentCount} Comments </p> : "1 Comments"}</>}  </p>
            </ButtomWrapper>
          </ImgWrapper>
          <CallChat commentCount= {commentCount}
              chatState={chatState}
                    setChatState={setChatState} />
          <Main>
            <Title>
              {userId != postUserId ? ( <h1 onClick={() => navigate(`/users/${postUserId}`)}>{username}</h1>
              ) : ( 
              <> <h1 onClick={() => navigate(`/users/${postUserId}`)}>{username}</h1>
                  <IconsWrapper>
                    <MdModeEdit
                      onClick={() => {
                        OnClickEditPost({ text, editPost, setMessage, SetEditPost, postId });
                      }}
                      color="white"
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                    />
                    <BsFillTrashFill
                      onClick={() => {
                        setDeleteScreen({ postId: postId, status: true });
                      }}
                      color="white"
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                      size="15px"
                    />
                  </IconsWrapper> </>)}
            </Title>
            <Description>
              <ReactTagify  colors={"white"}
                            tagClicked={(tag) => { GoToTag(tag) }}>
                {text}
              </ReactTagify>
              {editPost.status && postId === editPost.postId ? 
              (<EditInput
                  postId={postId}
                  SetEditPost={SetEditPost}
                  handleChange={handleChange}
                  message={message}
                  setMessage={setMessage}
                  text={text} />
                ) : ( "" )}
            </Description>
            <a href={`${urlMetadataOBJ.url}`} target="_blank" rel="noopener noreferrer">
              <UrlMetadaSpace>
                <UrlMetadaDetails>
                  <TitleUrl> {`${urlMetadataOBJ.title}`} </TitleUrl>
                  <DescriptionUrl> {`${urlMetadataOBJ.description}`} </DescriptionUrl>
                  <LinkUrl>{`${urlMetadataOBJ.url}`}</LinkUrl>
                </UrlMetadaDetails>
                <ImageUrl>
                  <img src={urlMetadataOBJ.image?.url} alt="image not found &#x1F625;" />
                </ImageUrl>
              </UrlMetadaSpace>
            </a>
            {(chatState ? ( <ChatSection  postId={postId}
                                          chatState={chatState}
                                          setChatState={setChatState}
                                          allComments={allComments}
                                          setAllComments={setAllComments}
                                          postUserId={postUserId} 
                                          userId = {userId}/>
                          ) : 
                          ('')
              )}
          </Main>
        </PostHTML>
    </>
  );
}

const PostHTML = styled.div`
    position: relative;
    display: flex;
    width: 610px;
    min-height:276;
    margin-bottom: 16px;
    background-color:  black;
    @media only screen and (max-width:800px) {
    width: 100vw;
    border-radius:0px;
    }
`
const TitleUrl = styled.h1`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #cecece;
  margin-bottom: 10px;
`;
const DescriptionUrl = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9b9595;
`;
const LinkUrl = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9b9595;
  position: absolute;
  bottom: 10px;
`;
const UrlMetadaDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 24px 27px 5px 19px;
`;
const ImageUrl = styled.div`
  img {
    width: 154px;
    height: 153px;
    border-radius: 0 16px 16px 0;
    object-fit: cover;
   
  }
`;
const ImgWrapper = styled.div`
  .Register {
    color: ${(props) => (props.like ? "red" : "white")};
    cursor: pointer;
  }
  h1 {
    color: white;
    cursor: pointer;
    
  }
  img {
    margin: 17px 18px 20px 18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Main = styled.div`
  padding: 0 21px 20px 0;
  /* background-color: blue; */
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0 7px 0;
  margin-top: 16px;
  
  /* background-color: red; */
  h1 {
    font-size: 19px;
    font-weight: 400;
    line-height: 22.8px;
    color: #fff;
    cursor: pointer;
  }
`;
const IconsWrapper = styled.div`
  color: blue;
  
`;

const UrlMetadaSpace = styled.div`
  display: flex;
  justify-content: space-between;
  width: 503px;
  height: 155px;
  border: solid 1px gray;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  
  /* background-color: red; */
  :hover {
    transition: 0.5s;
    background-color: white;
    background: rgba(255, 255, 255, 0.2);
  }
`;
const Description = styled.div`
    margin-bottom: 15px;

    font-size: 17px;
    font-weight: 600;
    color: #B7B7B7;
    /* background-color: yellow; */
`;
const Likes = styled.div`
    width: auto;
    height: auto;
    padding: 5px;
    background-color: #FFF;
    opacity:${props => props.isShown ? '1' : '0'};
    z-index: ${props => props.isShown ? '1' : '-1'};;
    transition: all 0.5s ease-out;
    p{
        color: #505050;
        font-size: 5px;
        font-weight: 700;
    }
    position: absolute;
    top:50%;
`
const LikeWrapper = styled.div`
position:absolute;
top: 84px;
left:33px;
  p{
    font-size:12px;
    line-height:1px;
    margin-top:5px;
    margin-left:-2px;
  }
`;

const ButtomWrapper = styled.div`
position:absolute;
top: 190px;
left:30px;
color:white;
  p{
    font-size:12px;
    line-height:1px;
    margin-top:0px;
    margin-left:-5px;
  }
  p{
    font-size:12px;
    line-height:1px;
    margin-top:0px;
    margin-left:-5px;
  }
  .Comentario{
    font-size:12px;
    line-height:1px;
    margin-top:-55px;
    margin-left:-15px;
  }
`;

// const ToolTip = styled.div`
// max-height: 50px;
// display: flex;
// justify-content: center;
// align-items: center;

// `
