import styled from "styled-components";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { ReactTagify } from "react-tagify";
import React from "react";
import { useContext, useEffect, useState } from "react";
import mql from '@microlink/mql'
import { useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import GlobalContext from "../../contexts/globalContext";
import PropagateLoader from "react-spinners/PropagateLoader";
import { OnClickEditPost } from "./Functions/editPost";
import EditInput from "./Functions/editInput";
import { GoToTag } from "./Functions/goToTag";

export default function Post(
    {   
        username, postUserId, userImg,
        text, link, likesQtd, liked,
        postId
    }) {
    //useState
    const [like, setLike]                     = useState(liked)
    const [props, setProps]                   = useState('false')
    const [message, setMessage]               = useState('');
    const [isShown, setIsShown]               = useState(false)
    const [urlMetadataOBJ, setUrlMetadataOBJ] = useState({})
    const [form, setForm]                     = useState({ link: '', text: '' })
    //GlobalContext
    const { setDeleteScreen, editPost, SetEditPost } = useContext(GlobalContext);
    // generic const declaration
    const navigate = useNavigate()
    const userId = localStorage.getItem("userId");
    const handleChange = event => {
        if (!message) { setMessage(text) }
        setMessage(event.target.value);
    };

    useEffect(async () => {
        SetEditPost({ postId: '', status: false })
        if (!message) { setMessage(text) }
        if (like) { setProps('true') }
        const { data } = await mql(link, {
            data: {
                avatar: {
                    selector: '#avatar',
                    type: 'image',
                    attr: 'src'
                }
            }
        })
        setUrlMetadataOBJ(data)
    }, [])

    return (
        <>{
            (!urlMetadataOBJ.url) ?
                ( <PropagateLoader color="#b3b3b3" />)
                :
                (<PostHTML>
                    <ImgWrapper props={props}>
                        <img src={userImg} />
                        <div>
                            {props === 'true' ?
                                (
                                    <BsHeartFill
                                        size='20px'
                                        onClick={() => {
                                            setLike(!like)
                                            setProps('false')
                                        }}
                                        onMouseEnter={() => setIsShown(true)}
                                        onMouseLeave={() => setIsShown(false)}
                                    />
                                ) : (
                                    <BsHeart
                                        size='20px'
                                        onClick={() => {
                                            setLike(!like)
                                            setProps('true')
                                        }}
                                        onMouseEnter={() => setIsShown(true)}
                                        onMouseLeave={() => setIsShown(false)}
                                    />
                                )}

                        </div>

                        <p>{likesQtd}</p>

                        <Likes
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                            isShown={isShown}
                        >
                            <p>vários likes pra tu ficá feliz</p>

                        </Likes>

                    </ImgWrapper>
                    <Main>
                        <Title>
                            {userId != postUserId ?
                                (<h1 onClick={() => navigate(`/user/${userId}`)} >
                                    {username}
                                </h1>)
                                :
                                (<>
                                    <h1 onClick={() => navigate(`/user/${userId}`)} >
                                        {username}
                                    </h1>
                                    <IconsWrapper>
                                        <MdModeEdit
                                            onClick={() => {
                                                OnClickEditPost({ text, editPost, setMessage, SetEditPost, postId })
                                            }}
                                            color='white' DeleteScreen
                                            style={{
                                                marginLeft: '10px',
                                                cursor: 'pointer'
                                            }}
                                        />
                                        <BsFillTrashFill onClick={() => { setDeleteScreen({ postId: postId, status: true }) }}
                                            color='white'
                                            style={{
                                                marginLeft: '10px',
                                                cursor: 'pointer'
                                            }}
                                            size='15px' />
                                    </IconsWrapper>
                                </>)}
                        </Title>
                        <Description>
                            <ReactTagify colors={"white"}
                                tagClicked={(tag) => { GoToTag(tag) }} >
                                {text}
                            </ReactTagify>
                            {(editPost.status && postId === editPost.postId) ?
                                (<EditInput
                                    postId={postId}
                                    SetEditPost={SetEditPost}
                                    handleChange={handleChange}
                                    message={message}
                                    setMessage={setMessage}
                                    text={text}
                                />)
                                :
                                ('')}
                        </Description>
                        <a href={`${urlMetadataOBJ.url}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <UrlMetadaSpace>
                                <UrlMetadaDetails>
                                    <TitleUrl> {`${urlMetadataOBJ.title}`} </TitleUrl>
                                    <DescriptionUrl> {`${urlMetadataOBJ.description}`} </DescriptionUrl>
                                    <LinkUrl>{`${urlMetadataOBJ.url}`}</LinkUrl>
                                </UrlMetadaDetails>
                                <ImageUrl>
                                    <img src={urlMetadataOBJ.image?.url}
                                        alt='image not found &#x1F625;' />
                                </ImageUrl>
                            </UrlMetadaSpace>
                        </a>
                    </Main>
                </PostHTML>)
        }</>)
}

const PostHTML = styled.div`
    display: flex;
    width: 610px;
    border-radius:16px;
    margin-bottom: 16px;
    background-color:  black;
    position: relative;
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
        border-radius:  0 16px 16px 0 ;
        object-fit: cover 
    }
`
const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        color: ${props => props.like === true ? 'red' : 'white'};
        cursor: pointer;
    }
    img{
        margin: 18px 18px 30px 18px ;
        width:50px;
        height:50px;
        border-radius: 50%;
        object-fit: cover;
    }
    p{
        margin-top: 5px;
        color: white;
    }
`
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
const Description = styled.div`
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 600;
    color: #B7B7B7;
    /* background-color: yellow; */
`
const UrlMetadaSpace = styled.div`
    display: flex;
    justify-content: space-between;
    width: 503px;
    height: 155px;
    margin-bottom: 10px;
    border: solid 1px gray;
    border-radius: 16px;
    color: white;
    cursor: pointer;
    /* background-color: red; */
    :hover { 
        transition: 0.5s;
        background-color: white ;
        background: rgba(255, 255, 255, 0.2);
    }
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
        font-size: 13px;
        font-weight: 700;
    }
    position: absolute;
    top:50%;
`;
