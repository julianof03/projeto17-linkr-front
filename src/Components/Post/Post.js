import styled from "styled-components";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { ReactTagify } from "react-tagify";
import React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import mql from '@microlink/mql'
import { useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import GlobalContext from "../../contexts/globalContext";
import { EditPost } from "../../Services/api";

export default function Post(
    {
        username,
        postUserId,
        userImg,
        text,
        link,
        likesQtd,
        liked,
        postId
    }
    ) {
    const navigate = useNavigate() 
    const userId = +localStorage.getItem("userId");
    const [like, setLike] = useState(liked)
    const [props, setProps] = useState('false')
    const [message, setMessage] = useState('');
    const [isShown, setIsShown] = useState(false)
    const [urlMetadataOBJ, setUrlMetadataOBJ] = useState({})
    const [form, setForm] = useState({ link: '', text: '' })
    const {
        deleteScreen, setDeleteScreen,
        editPost, SetEditPost,
        postId_global, setPostId_global
    } = useContext(GlobalContext);

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

    const inputRef = useRef();
    useEffect(async () => {
        inputRef.current.focus();
    }, [])

    function goTo(tag) {
        const newTag = tag.replace('#', '')
        navigate(`/hashtag/${newTag}`)
    }

    const handleChange = event => {
        if (!message) { setMessage(text) }
        setMessage(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        // value of input field

        // set value of input field
        setMessage('New value');
    };

    function sendForm(e) {
        e.preventDefault()
        const id = postId;
        const body = {
            text: message,
        }

        const promise = EditPost(body, id)

        promise.then((res) => {
            document.location.reload()
            SetEditPost({ postId: '', status: false })
        })
        promise.catch((err) => alert(err.message))
    }

    document.onkeydown = function (e) {
        if (e.key === 'Escape') {
            setMessage(text);
            SetEditPost({ postId: '', status: false })
        }
    }

    function openLink(ulr){
        
    }

    return (
        <>{
                (!urlMetadataOBJ.url) ?
                    (<p>LOADING</p>)
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
                                {(userId !== postUserId) ?
                                    (<h1 onClick={()=>navigate(`/user/${userId}`)} >
                                        {username}
                                    </h1>)
                                    :
                                    (<>
                                        <h1 onClick={()=>navigate(`/user/${userId}`)} >
                                            {username}
                                        </h1>
                                        <IconsWrapper>
                                            <MdModeEdit
                                                onClick={() => {
                                                    if (editPost.status) {
                                                        setMessage(text);
                                                        SetEditPost({ postId: '', status: false })
                                                    }
                                                    else {
                                                        SetEditPost({ postId: postId, status: true })
                                                    }
                                                }}
                                                color='white' DeleteScreen
                                                style={{
                                                    marginLeft: '10px',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                            <BsFillTrashFill    onClick={() =>{setDeleteScreen({postId: postId, status: true})}}
                                                                color='white'
                                                                style={{marginLeft: '10px',
                                                                        cursor: 'pointer'}}
                                                                size='15px'/>
                                        </IconsWrapper>
                                    </>)}
                            </Title>
                            <Description>
                                <ReactTagify    colors={"white"}
                                                tagClicked={(tag) => { goTo(tag) }} >
                                    {text}
                                </ReactTagify>
                                {(editPost.status && postId === editPost.postId) ?
                                    (<>
                                        <EditContainer></EditContainer>
                                        <form onSubmit={sendForm}>
                                            <TextInput
                                                type="text" id="message"
                                                name="message" onChange={handleChange}
                                                required={true} value={message}
                                                ref={inputRef}
                                            ></TextInput>
                                        </form>
                                    </>) 
                                    :
                                    ('')}
                            </Description>
                            <a  href={`${urlMetadataOBJ.url}`}
                                target="_blank" 
                                rel="noopener noreferrer">
                                <UrlMetadaSpace>
                                    <UrlMetadaDetails>
                                        <TitleUrl> {`${urlMetadataOBJ.title}`} </TitleUrl>
                                        <DescriptionUrl> {`${urlMetadataOBJ.description}`} </DescriptionUrl>
                                        <LinkUrl>{`${urlMetadataOBJ.url}`}</LinkUrl>
                                    </UrlMetadaDetails>
                                    <ImageUrl>
                                    <img    src={urlMetadataOBJ.image?.url}
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
const EditContainer = styled.div`
    background-color:  black;
    width: 100%;
    height: 30px;
    border: unset;
    border-radius:5px;
`;
const TextInput = styled.input`
    position:absolute;
    top:40px;
    left:85px;
    width:83%;
    height: 16%;
    border: unset;
    border-radius:5px;
    margin-top: 10px;
    background-color: #EFEFEF;
    ::placeholder{
        font-size: 15px;
        font-weight: 300;
        color: #949494;
    }
`