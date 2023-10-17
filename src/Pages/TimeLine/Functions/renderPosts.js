import Post from "../../../Components/Post/Post"
import InfiniteScroll from "react-infinite-scroll-component";
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from "styled-components";
import { useContext, useState } from "react";
import GlobalContext from "../../../contexts/globalContext";


export default function RenderPosts(props) {

    const [hasMore, setHasMore] = useState(true)
    const { reRender, setReRender } = useContext(GlobalContext)

    async function loadMoreFunc() {

        if (props.n <= props.postsList.length) {
            setTimeout(() =>
                props.setN(props.n + 10)
                , 2000)
        } else {
            setHasMore(false)
        }

    }
    console.log("Posts");


    return (
        <Wrapper>
            <InfiniteScroll
                dataLength={props.postsList.length}
                next={loadMoreFunc}
                hasMore={true}

            >
                {props.postsList.map((postData, index) => {
                    return <Post
                        key={index}
                        postId={postData.postId}
                        username={postData.username}
                        userImg={postData.userImg}
                        text={postData.text}
                        link={postData.link}
                        likesQtd={postData.likesQtd}
                        userLiked={postData.userLiked}
                        postUserId={postData.postUserId}
                        repostCount={postData.repostCount}
                        repostId={postData.postId}
                        commentCount={postData.commentCount}
                        repostUser={postData.repostUser} />
                }




                )}


                {(props.n <= props.postsList.length) ? (
                    <EndLoader>

                        <PropagateLoader
                            color="#b3b3b3"
                        />

                    </EndLoader>
                ) : (
                    <EndTimeline>

                        <p>No posts found from your friends</p>

                    </EndTimeline>
                )}

            </InfiniteScroll>
        </Wrapper >

    )
}

const Wrapper = styled.div`
-ms-overflow-style: none;
scrollbar-width: none;
padding-top: 5px;

display: flex;
align-items: center;

h4{
    color: white;
    margin-left: 50%;
    font-size: 50px;
}
`
const EndTimeline = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #FFF;
margin-bottom: 50px;
margin-top: 50px;

transition: transform 2s;



p{
    margin-bottom: 50px;
    margin-top: 50px;
    color: #FFF;
    font-size: 20px;

}
`
const EndLoader = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-bottom: 50px;
margin-top: 50px;
`