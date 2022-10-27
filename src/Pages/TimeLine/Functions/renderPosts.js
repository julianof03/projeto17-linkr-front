import Post from "../../../Components/Post/Post"

export default function RenderPosts(props) {

    return (
        props.postsList.map((postData, index) =>
            <Post   postId={postData.postId}
                    key={index}
                    username={postData.username}
                    userImg={postData.userImg}
                    text={postData.text}
                    link={postData.link}
                    likesQtd={postData.likesQtd}
                    liked={postData.liked}
                    postUserId={postData.userId}/>
    ))}