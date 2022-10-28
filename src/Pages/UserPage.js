import styled from "styled-components";
import Post from "../Components/Post/Post.js";
import Trending from "../Components/Trending/Trending.js";
import GlobalContext from "../contexts/globalContext.js";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getConfig from "../Services/getConfig.js";
import { getUser, follow, unfollow } from '../Services/api.js'
import {FollowBox, FollowBoxMobile} from "../Styles/FollowStyle.js"

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
    const [isUserPage, setIsUserPage] = useState(false);
    const [userPosts, setUserPosts] = useState({
        array: [],
        size: 0
    })
    const [follows, setFollows] = useState(false);
    const [canFollow,setCanFollow] = useState(true);

    const [n, setN] = useState(0)
    useEffect(async () => {

        try{
            let allUserPosts;
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
            };
                const userPageId = localStorage.getItem("userId");
                if(userId==userPageId){
                    setIsUserPage(true);
                }else if(allUserPosts[0].isFollowing){
                    setFollows(true);
                }else{
                    setFollows(false);
                };

                setUserPosts({
                    array: allUserPosts.slice(n, n + 20),
                    size: allUserPosts.length
                });

            } catch(error){
                console.log(error);
            };

    }, [reRender]);

    function nextPage() {
        if (n + 20 > posts.size) {

            let add = posts.size - n

            if (add > 0) {
                setN(n + add);
            };
            return;
        };
        setN(n + 20);

        window.scrollTo(0, 0);
        setReRender(!reRender);
    };

    async function changeFollow(){
        setCanFollow(false)
        const id = {id:userId};
            try{
            if (!follows){
                console.log(id)
             await follow(id, getConfig(token));
            setFollows(true);
            }else{
            await unfollow(userId, getConfig(token));
            setFollows(false);
            };

            setCanFollow(true);
            
            }catch(error){
             console.log(error);
             setCanFollow(true);
             alert('Não foi possivel seguir o usuário, tente novamente.');
            };

    };

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
                            {isUserPage?<AlignBox></AlignBox>:<FollowBoxMobile canFollow={canFollow?'auto':'none'} follow={!follows} onClick={changeFollow}>
                                {follows?'Unfollow':'Follow'}
                            </FollowBoxMobile>}
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
                        <TrendingWrapper>
                        {isUserPage?<></>:<FollowBox canFollow={canFollow?'auto':'none'} follow={!follows} onClick={changeFollow}>
                            {follows?'Unfollow':'Follow'}
                        </FollowBox>}
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
@media only screen and (max-width:800px) {
        margin-top:80px;
    }

`;
const RightWrapper = styled.div`
height: 500px;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: left;
align-items: flex-start;

@media only screen and (max-width:800px) {
    width: 0vw;
    }
`;
const LeftWrapper = styled.div`
width: 70vw;

display: flex;
flex-direction: column;
justify-content: right;
align-items: center;
margin-left: calc(70vw-610px);

@media only screen and (max-width:800px) {
    width: 100vw;
    align-items: center;
    }
`;
const Title = styled.div`
width: 610px;
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
@media only screen and (max-width:800px) {
    width: 100vw;
    align-items: center;
    justify-content: space-around;
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
width: 610px;
display: flex;
flex-direction: column;
border-radius: 10px;
@media only screen and (max-width:800px) {
    width: 100vw;
    align-items: center;
    }

`;
const TrendingWrapper = styled.div`
height: 100vh;
margin-right: calc(30vw-300px);
`;

const AlignBox = styled.div`
width: 30px;
height: 10px;
background-color:transparent;
`
