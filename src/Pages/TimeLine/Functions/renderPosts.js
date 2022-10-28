import Post from "../../../Components/Post/Post"
import InfiniteScroll from "react-infinite-scroll-component";
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from "styled-components";
import { MdSecurityUpdateGood } from "react-icons/md";


export default function RenderPosts(props) {

    return (
        <Wrapper>
            <InfiniteScroll

                dataLength={props.postsList.length}
                next={() => {
                    console.log(props.n)
                    props.setN(props.n + 5)
                }
                }
                hasMore={true}
                style={{
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}
            >
                {props.postsList.map((postData, index) =>
                    <Post postId={postData.postId}
                        key={index}
                        username={postData.username}
                        userImg={postData.userImg}
                        text={postData.text}
                        link={postData.link}
                        likesQtd={postData.likesQtd}
                        userLiked={postData.userLiked}
                        postUserId={postData.userId}
                        repostCount={postData.repostCount}
                        repostId = {postData.postId}
                        repostUser = {postData.repostUser}
                        commentCount = {postData.commentCount}
                        respostUserName = {postData.respostUserName} />
                )}


                {props.n > props.postsList ?
                    (
                        <PropagateLoader
                            color="#b3b3b3"
                            style={{
                                marginLeft: '50%'
                            }} />
                    ) : (
                        <EndTimeline>
                            <p>
                                No posts found from your friends
                            </p>
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

`
const EndTimeline = styled.div`
display: flex;
align-items: center;
justify-content: center;

p{
    margin-bottom: 20px;
    color: #FFF;
    font-size: 20px;
}
`