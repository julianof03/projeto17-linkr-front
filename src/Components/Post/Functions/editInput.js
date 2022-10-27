import { EditPost } from "../../../Services/api"
import styled from "styled-components";

export default function EditInput({ 
    sendForm, 
    handleChange, 
    message,
    postId,
    SetEditPost,
    setMessage, 
    text
}) {

    document.onkeydown = function (e) {
        if (e.key === 'Escape') {
            setMessage(text);
            SetEditPost({ postId: '', status: false })
        }
    }
    function sendForm(e) {
        e.preventDefault()
        const id = postId;
        const body = {
            text: message,
        }
    
        const promise = EditPost(body, id)
    
        promise.then((res) => {
            document.location.reload()
            SetEditPost({ postId: '', status: false })
        })
        promise.catch((err) => alert(err.message))
    }

    return (
        <>
            <EditContainer></EditContainer>
            <form onSubmit={sendForm}>
                <TextInput
                    type="text" id="message"
                    name="message" onChange={handleChange}
                    required={true} value={message}
                ></TextInput>
            </form>
        </>
    );
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
