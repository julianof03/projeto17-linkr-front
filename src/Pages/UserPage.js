import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import GlobalContext from "../contexts/globalContext.js";
import { useContext } from "react";

export default function UserPage() {

    const { setHeader } = useContext(GlobalContext);
    setHeader(true);

    const array = [
        {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo #HashTag #Jujutsu',
            link: 'https://github.com/VictorHugoCid/projeto17-linkr-front',
            likesQtd: 15,
            liked: true
        }, {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'outro texto',
            link: 'https://react-icons.github.io/react-icons/search?q=heart',
            likesQtd: 15,
            liked: false
        },{
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo #HashTag #Jujutsu',
            link: 'https://www.youtube.com/watch?v=2ZbvzROhRks',
            likesQtd: 15,
            liked: true
        },{
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo #HashTag #Jujutsu',
            link: 'https://br.tradingview.com/chart/cnTdaK9o/?symbol=BINANCE%3ASNXUSDTPERP',
            likesQtd: 15,
            liked: false
        }

    ]
    let name = 'Gojo Satoru';


    return (
        <Wrapper>

            <LeftWrapper>
                <Title>
                    <ImgWrapper>
                     <img src='https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg'
                     />
                    </ImgWrapper>
                    <h1>{name}'s posts'</h1>

                </Title>

                <PostWrapper>
                    {array.map((value, index) =>
                        <Post
                            key = {index}
                            username={value.username}
                            img={value.img}
                            text={value.text}
                            link={value.link}
                            likesQtd={value.likesQtd}
                            liked={value.liked}
                        />
                    )}

                </PostWrapper>

            </LeftWrapper>

            <RightWrapper>
                <TrendingWrapper>
                    <Trending />
                </TrendingWrapper>
            </RightWrapper>

        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
padding-top: 80px;

background-color: #333333 ;

display: flex;
justify-content: center;

`;
const RightWrapper = styled.div`
height: 500px;
width: 21vw;

position:relative;
`;
const LeftWrapper = styled.div`
width: 42vw;

display: flex;
flex-direction: column;
`;
const Title = styled.div`
width:100%;
display: flex;
justify-content: flex-start;
align-items: center;

h1{
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Oswald';
}

`;
const ImgWrapper = styled.div`
img{
margin: 10px 10px 30px 10px ;
width:70px;
height:70px;
border-radius: 50%;
object-fit: cover;
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
/* position:absolute; */
top:112px;
`;