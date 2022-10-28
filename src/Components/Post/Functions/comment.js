import React, { useContext } from 'react';
import { MdChatBubbleOutline } from "react-icons/md";
import { SlPaperPlane } from "react-icons/sl";
import { useState, useEffect } from 'react';
import { GetComments } from "../../../Services/api";
import { addComments } from "../../../Services/api";

import styled from 'styled-components';
import getConfig from '../../../Services/getConfig';
import GlobalContext from '../../../contexts/globalContext';



function CallChat({ chatState, setChatState, commentCount }) {
    return (
        <ButtomWrapper>
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
           
        </ButtomWrapper>
        
    );
}

function ChatSection({
    chatState,    setChatState,
    postUserId,   postId, 
    allComments,  setAllComments,
    userId,       userImg
}) {

    const [message, setMessage] = useState('');

    const{reRender, setReRender} = useContext(GlobalContext)
    
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
    useEffect(() => {
        GetAllComments()
    }, [reRender]);


    function GetAllComments(){
        GetComments(userId, postId)
        .then((res) => {
            setAllComments(res.data)
        });
    }
    function sendForm(e) {
        e.preventDefault()
        const body = {
            comment: message,
            userId: userId,
        }
        const promise = addComments(postId ,body);

        promise.then(() => {
             console.log("publiquei")
             setReRender(!reRender)
            })
        promise.catch((err) => alert(err))
        setTimeout(() => {
            setMessage('');
        }, 500)
    }


    return (<>
        {(chatState) ?
            (
                <>
                    <EditContainer><Border></Border>
                        {allComments ? (
                            (allComments.map((c) => {
                                return (
                                    <Comment>
                                        <div className='topName'>
                                        <p className='Name'>{c.name}</p>
                                        <p className='auxName'>{(c.userId === postUserId ? ("• post’s author"):(c.follows ? ('• following'):('')))}</p>
                                        </div>
                                        <CommentText><p>{c.comment}</p></CommentText>
                                        <img src={c.pictureUrl}></img>
                                        <Line></Line>
                                    </Comment>);
                            }))
                        )
                            : ('')}
                    </EditContainer>
                    <Form >
                        <form onSubmit={sendForm}>
                            <img src={userImg}></img>
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
                                    position: 'absolute',
                                    right: '35px',
                                    bottom: '36px',
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
const ButtomWrapper = styled.div`
    position:absolute;
    top: 115px;
    left:32px;
    p{
    font-size:12px;
    margin-top:0px;
    margin-left:-20px;}
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
    height:fit-content;
    
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
    height:65px;
    img{
        position:absolute;
        left:20px;
        bottom:25px;
        width:42px;
        height:42px;
        border-radius:25px;
    }
`;
const Comment = styled.div`
    display:flex;
    position:relative;
    min-height:70px;
    max-height:fit-content;
    img{
        position:absolute;
        left:10px;
        top:15px;
        width:42px;
        height:42px;
        border-radius:25px;
    }
    p{
        font-size:14px;
        font-family:lato;
        font-weight:bold;
    }
    .topName{
        display:flex;
        position:absolute;
        top:20px;
        left:60px;
        height:20px;
    }
    .Name{  
        font-size:14px;
        margin-top:0px;
    }
    .auxName{
        color:#565656;
        margin-left:15px;
        margin-top:0px;
    }
    `;
const Line = styled.div`
        position:absolute;
        width:100%;
        bottom:0px;
        height:1px;
        background-color:#353535;
    `;
const CommentText = styled.div`
        position:relative;
        margin-top:50px;
        margin-left:60px;
        width:100%;
        font-size:14px;
        font-family:lato;
        font-weight:bold;
        p{
            position:relative;
            top: -10px;
            font-size:14px;
            font-family:lato;
            font-weight:400;
            color:#acacac;
        }
    `;