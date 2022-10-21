import styled from "styled-components";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";


export default function Post(
    { username,
        img,
        text,
        link,
        likesQtd,
        liked }
) {

    const [like, setLike] = useState(liked)
    const [props, setProps] = useState('false')
    const [isShown, setIsShown] = useState(false)

    useEffect(()=>{
        if(like){
            setProps('true')
        }
    })
    

    return (
        <PostWrapper>

            <ImgWrapper props={props}>
                <img src='https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg' />
                <div >
                    {props === 'true' ? (
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
                    <h1>{username}</h1>
                    <IconsWrapper>
                        <MdModeEdit
                            color='white'
                            style={{
                                cursor: 'pointer'
                            }}
                        />
                        <BsFillTrashFill
                            color='white'
                            style={{
                                marginLeft: '10px',
                                cursor: 'pointer'
                            }}
                            size='15px'
                        />
                    </IconsWrapper>
                </Title>

                <TextWrapper>
                    <p> {text} </p>
                </TextWrapper>

                <LinkWrapper>
                    {link}
                </LinkWrapper>

            </Main>

        </PostWrapper>
    )
}

const PostWrapper = styled.div`
    display: flex;
    position: relative;
    width: 610px;
    border-radius:16px;
    margin-bottom: 16px;
    background-color:  #171717;
`
const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        color: ${props => props.props === 'true' ? 'red' : 'white'};
        cursor: pointer;
    }
    img{
        margin: 18px 18px 30px 18px ;
        width:50px;
        height:50px;
        border-radius: 50%;
        object-fit: cover;
    }
`
const Main = styled.div`
    width:85%;
    height:100%;
    margin-left: 25px;
    margin-right: 25px;
    background-color: #171717 ;
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px 0 7px 0;
    margin-top: 16px;
    /* background-color: blue; */
    h1{
        font-size: 19px;
        font-weight: 400;
        line-height: 22.8px;
        color: #FFF;
        cursor: pointer;
    }
`
const IconsWrapper = styled.div`
    color: blue;
`
const TextWrapper = styled.div`
    margin-bottom: 15px;
    font-size: 17px;
    font-weight: 700;
    color: #B7B7B7;
    background-color: yellow;
`
const LinkWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border: solid 1px gray;
    border-radius: 16px;
    color: white;
`
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
`