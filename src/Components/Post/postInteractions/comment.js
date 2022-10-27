import React from 'react';
import { MdChatBubbleOutline } from "react-icons/md";
import { SlPaperPlane } from "react-icons/sl";
import { useState } from 'react';

import styled from 'styled-components';



function CallChat({ chatState, setChatState }) {
    return (
        <MdChatBubbleOutline
            onClick={() => {
                setChatState(!chatState);
            }}
            style={{
                width: '25px',
                height: '25px',
                marginTop: '20px',
                cursor: 'pointer',
                color: 'white'
            }} />
    );
}
function ChatSection({ chatState, setChatState, postId}) {

    const [message, setMessage] = useState('');
    

    document.onkeydown = function (e) {
         if (e.key === 'Escape') {
             setMessage(message);
             setChatState(!chatState);
         }
     }
     const handleChange = event => {
         if (!message) { setMessage('') }
         setMessage(event.target.value);
     };

    function sendForm(e) {
   

    e.preventDefault()
     const body = {
        text: message,
     }
     console.log(message);
    
    //     // const promise = EditPost(body, id)
    
    //     // promise.then((res) => {
    //     //     document.location.reload()
    //     //     setChatState(!chatState);
    //     // })
    //     // promise.catch((err) => alert(err.message))
     }

    return (<>
        {(chatState) ?
            (
                <>
                <EditContainer><Border></Border>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                <Comment>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                </Comment>
                </EditContainer>
                <Form >
                    <form onSubmit={sendForm}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBVRLe_WplXu2wbcbMZhYWsxvHolJbp2ELqzh5ldLKGtOUlafRJMTybN1zMpfTWJYk-c&amp;usqp=CAU"></img>
                    <TextInput
                        type="text" id="message"
                        name="message" onChange={handleChange}
                        required={true} value={message}
                        placeholder="write a comment"
                    >
                    </TextInput>
                    <SlPaperPlane
                        onClick={(e) => {
                            sendForm(e);
                        }}
                        style={{
                            position:'absolute',
                            right:'35px',
                            bottom:'36px',
                            width: '16px',
                            height: '16px',
                            marginTop: '20px',
                            cursor: 'pointer',
                            color: 'white'
                        }} />
                    </form>
                
                </Form>
            </>
            ) : ('')}
    </>
    );
}




export {
    CallChat,
    ChatSection
}


const Comment = styled.div`
margin-top:20px;

`;

const Border = styled.div`
    position:absolute;
    background-color: black;
    width: 100%;
    top:-7px;
    left:0px;
    margin-bottom: -25px;
    min-height:25px;
    border-radius:10px;
`;

const EditContainer = styled.div`
    position:relative;
    background-color: #1e1e1e;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    padding:25px;
    width: 121.2%;
    margin-left:-86px;
    min-height:200px;
    height:fit-content;
    img{
    width:42px;
    height:42px;
    border-radius:25px;
}
`;
const TextInput = styled.input`
    position:absolute;
    bottom:25px;
    left:80px;
    width:510px;
    height: 39px;
    border: unset;
    border-radius:5px;
    margin-top: 10px;
    background-color: #252525;
    font-family: lato;
    padding-left:20px;
    padding-right:50px;
    ::placeholder{
        font-family: lato;
        font-size: 15px;
        font-weight: 300;
        color: #575757;
    }
`
const Form = styled.div`
    background-color: #1e1e1e;
    width:121.2%;
    margin-left:-86px;
    position:relative;
    margin-bottom:-26px;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    height:90px;
    img{
    position:absolute;
    left:20px;
    bottom:28px;
    width:42px;
    height:42px;
    border-radius:25px;
}
`;