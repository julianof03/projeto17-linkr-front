import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import GlobalContext from "../contexts/globalContext.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userImage, logOut } from '../Services/api.js';
import getConfig from "../Services/getConfig.js";

export default function UserPage() {
    const navigate = useNavigate();

    const { setHeader } = useContext(GlobalContext);
    setHeader(true);

    const { posts, userId } = useContext(GlobalContext)
    

    const userPosts = []/* posts.filter((value) => value.postUserId === userId) */
    console.log(userPosts)

    let name = 'Gojo Satoru';

    const { token, setToken } = useContext(GlobalContext);
    const [profileImage, setProfileImage] = useState('');
    useEffect(async () => {

        const tokenLs = localStorage.getItem("token");

        if (token === '') {
            if (!tokenLs) {
                navigate('/signin');
                return;
            }
            setToken(`${tokenLs}`);
        }

        try {
            setProfileImage((await userImage(getConfig(tokenLs))).data);

        } catch (error) {

            if (error.response.status === 401) {
                navigate('/signin');
            };
            return;

        }

    }, [setHeader]);

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
                    {userPosts.map((value, index) =>
                        <Post
                            key={index}
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