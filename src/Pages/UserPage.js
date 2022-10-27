import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import GlobalContext from "../contexts/globalContext.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getConfig from "../Services/getConfig.js";
import { getUser, follow, unfollow } from '../Services/api.js'
import {FollowBox} from "../Styles/FollowStyle.js"

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
    const [follows, setFollows] = useState(false);

    const [n, setN] = useState(0)
    useEffect(async () => {

        try{
            let allUserPosts;
            console.log(userId)
            const tokenLs = localStorage.getItem("token");

            if (token === '') {
                if (!tokenLs) {
                    navigate('/signin');
                    return;
                }
                setToken(`${tokenLs}`);
                allUserPosts = (await getUser(userId,getConfig(tokenLs))).data
            } else{

                allUserPosts = (await getUser(userId,getConfig(token))).data
            }
            console.log(allUserPosts)

                if(allUserPosts[0].isFollowing){
                    setFollows(true);
                }else{
                    setFollows(false);
                }

                setUserPosts({
                    array: allUserPosts.slice(n, n + 20),
                    size: allUserPosts.length
                });

            } catch(error){
                console.log(error)
            }

    }, [reRender])

    function nextPage() {
        if (n + 20 > posts.size) {

            let add = posts.size - n

            if (add > 0) {
                setN(n + add)
            }
            return
        }
        setN(n + 20)

        window.scrollTo(0, 0)
        setReRender(!reRender)
    }

    async function changeFollow(){
        const id = {id:userId};
            try{
            if (!follows){
                console.log(id)
             await follow(id, getConfig(token));
            setFollows(true);
            }else{
            await unfollow(userId, getConfig(token));
            setFollows(false);
            }

            console.log('follow',follows);
            
            }catch(error){
             console.log(error);
            }

    }

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
                            <h1>{userPosts.array[0].username}'s posts</h1>
                        </Title>

                        <PostWrapper>
                            {userPosts.array.map((value, index) =>
                                <Post
                                    key={index}
                                    username={value.username}
                                    userImg={value.userImg}
                                    text={value.text}
                                    link={value.link}
                                    likesQtd={value.likesQtd}
                                    liked={value.liked}
                                />
                            )}

                        </PostWrapper>

                    </LeftWrapper>

                    <RightWrapper>
                        <FollowBox follow={!follows} onClick={changeFollow}>
                            {follows?'Unfollow':'Follow'}
                        </FollowBox>
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
@media only screen and (max-width:600px) {
        margin-top:80px;
    }

`;
const RightWrapper = styled.div`
height: 500px;
width: 21vw;
display: flex;
flex-direction: column;
justify-content: left;
@media only screen and (max-width:600px) {
    width: 0vw;
    }
`;
const LeftWrapper = styled.div`
width: 42vw;

display: flex;
flex-direction: column;
justify-content: right;
align-items: baseline;

@media only screen and (max-width:600px) {
    width: 100vw;
    align-items: center;
    }
`;
const Title = styled.div`
width:100vw;
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

border-radius: 10px;

`;
const TrendingWrapper = styled.div`
height: 100vh;

`;