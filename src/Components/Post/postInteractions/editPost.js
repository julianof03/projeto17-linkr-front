import styled from "styled-components";

function OnClickEditPost({ text, editPost, setMessage, SetEditPost, postId }) {
    if (editPost.status) {
        setMessage(text);
        SetEditPost({ postId: '', status: false })
    }
    else {
        SetEditPost({ postId: postId, status: true })
    }
}

export {
    OnClickEditPost,
}

const EditContainer = styled.div`
    background-color:  black;
    width: 100%;
    height: 30px;
    border: unset;
    border-radius:5px;
`;
const TextInput = styled.input`
    position:absolute;
    top:40px;
    left:85px;
    width:83%;
    height: 16%;
    border: unset;
    border-radius:5px;
    margin-top: 10px;
    background-color: #EFEFEF;
    ::placeholder{
        font-size: 15px;
        font-weight: 300;
        color: #949494;
    }
`