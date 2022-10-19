import styled from "styled-components";
import { BsFillTrashFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";


export default function Post() {

    let like = true

    return (
        <PostWrapper>

            <ImgWrapper>
                <img src='https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg' />
                <div like = {like}>
                    {like ? (
                        <BsHeartFill
                            size='20px'
                        />

                    ) : (
                        <BsHeart
                            size='20px'
                        />

                    )}


                </div>


            </ImgWrapper>


            <Main>
                <Title>
                    <h1>Nomezin Bacana</h1>
                    <IconsWrapper>
                        <MdModeEdit
                            color='white'
                        />
                        <BsFillTrashFill
                            color='white'
                            style={{
                                marginLeft: '10px'
                            }}
                            size='15px'
                        />
                    </IconsWrapper>
                </Title>

                <TextWrapper>
                    <p>
                        super texto com várias palavrinhas.......super texto com várias palavrinhas.......super texto com várias palavrinhas.......#semrepetir #originalidade

                    </p>

                </TextWrapper>

                <LinkWrapper>

                </LinkWrapper>

            </Main>

        </PostWrapper>
    )
}

const PostWrapper = styled.div`
width: 100%;
height: auto;
margin-bottom: 10px;

border-radius:16px;
background-color: #171717;
font-family: 'Lato';

display: flex;

`
const ImgWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;


div{
    color: ${props => props.like === true ? 'red' : 'white'};;
}

img{
margin: 10px 10px 30px 10px ;
width:70px;
height:70px;
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
width: 100%;
/* background-color: aliceblue; */
margin-top: 10px;
padding: 5px;

display: flex;
justify-content: space-between;

h1{
    font-size: 19px;
    font-weight: 400;
    color: #FFF;
}


`
const IconsWrapper = styled.div`
color: blue;

`

const TextWrapper = styled.div`
margin-bottom: 10px;
font-size: 17px;
font-weight: 700;
color: #B7B7B7;

`

const LinkWrapper = styled.div`
width: 100%;
height: 200px;
margin-bottom: 10px;
border: solid 1px gray;
border-radius: 16px;

`
