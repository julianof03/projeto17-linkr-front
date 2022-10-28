import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import GlobalContext from "../contexts/globalContext.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userImage, logOut } from '../Services/api.js';
import getConfig from "../Services/getConfig.js";
import { getUserPosts } from '../Services/api.js';
import RenderPosts from "./TimeLine/Functions/renderPosts.js";

export default function UserPage() {
    const navigate = useNavigate();

    const {
        token, setToken,
        reRender, setReRender,
        posts,
        setHeader
    } = useContext(GlobalContext);
    setHeader(true);

    const userId = useParams().id;

    const [userPosts, setUserPosts] = useState({
        array: [],
        size: 0
    })

    const [n, setN] = useState(0)
    useEffect(() => {
        getUserPosts(getConfig(token), userId)
            .then((res) => {
                
                setUserPosts({
                    array: res.data.slice(n, n + 5),
                    size: res.data.length
                })

            })

    }, [reRender])

    return (
        <>
            {(userPosts.array.length === 0) ? (

                <>LOADING</>
            ) : (

                <Wrapper>
                    <LeftWrapper>
                        <Title>
                            
                            <ImgWrapper>
                                <img src={userPosts.array[0].userImg}
                                />
                            </ImgWrapper>
                            <h1>{userPosts.array[0].username}'s posts'</h1>

                        </Title>

                        <PostWrapper>
                        
                            <RenderPosts
                                postsList={userPosts.array}
                                n={n}
                                setN={setN}
                            />

                        </PostWrapper>

                    </LeftWrapper>

                    <RightWrapper>
                        <TrendingWrapper>
                            <Trending />
                        </TrendingWrapper>
                    </RightWrapper>

                </Wrapper>
            )}
        </>
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