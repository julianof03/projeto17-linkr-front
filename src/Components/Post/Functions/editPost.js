function OnClickEditPost({ text, editPost, setMessage, SetEditPost, postId }) {
    if (editPost.status) {
        setMessage(text);
        SetEditPost({ postId: '', status: false })
    }else {SetEditPost({ postId: postId, status: true })}
}

export {
    OnClickEditPost,
}