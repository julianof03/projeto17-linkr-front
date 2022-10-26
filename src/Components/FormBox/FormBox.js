import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import React from "react";
import getConfig from "../../Services/getConfig"
import { createPost, userImage, logOut } from "../../Services/api";
import GlobalContext from "../../contexts/globalContext";


export default function FormBox({img}) {
    const navigate = useNavigate()

    const { token, setToken, reRender, setReRender } = useContext(GlobalContext)
    const [disable, setDisable] = useState(false)
    const [form, setForm] = useState({ link: '', text: ''})
    const [profileImage, setProfileImage] = useState('')
    const [buttonText, SetButtonText] = useState('Publish');

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    function sendForm(e) {
        e.preventDefault()
        if (disable === true) return
        setDisable(true)
        SetButtonText("Publishing...");
        
        const body = {
            link: form.link,
            text: form.text,
        }
        const promise = createPost(getConfig(token), body )
        
        promise.then( (res) => { navigate('/timeline') } )
        promise.catch( (err) => console.log('Deu Erro logout',err) )
        setTimeout(() => {
            SetButtonText("Publish")
            clearForm()
        })
    }
    function clearForm() {
        setForm({
            link: '',
            text: '',
        })
        setDisable(false)
        setReRender(!reRender)
    }
    useEffect(async () => {
        const tokenLs = localStorage.getItem("token");
        if (token === '') {
            if (!tokenLs) {
                navigate('/signin');
                return;
            }
            setToken(`${tokenLs}`);
        }

        try {
            setProfileImage((await userImage(getConfig(tokenLs))).data);

        } catch (error) {
            if (error.response.status === 401) {
                navigate('/signin');
            };
            return;
        }
    }, [setReRender]);

    return (
        <FormBoxWrapper >
            <ImgWrapper src={profileImage} />
            <Main onSubmit={sendForm}>
                <Answer> What are you going to share today? </Answer>
                <LinkInput  type='link' name='link'
                            placeholder="http..." onChange={handleForm}
                            value={form.link} disabled={disable} required>
                </LinkInput >
                <TextInput  type='text' name='text'
                            placeholder="manda seu textão" onChange={handleForm}
                            value={form.text} disabled={disable} required> 
                </TextInput>
                <ButtonWrapper type='submit'>
                    <button >
                    {buttonText}
                    </button>
                </ButtonWrapper>
            </Main>

        </FormBoxWrapper>
    )
}

const FormBoxWrapper = styled.div`
    display: flex;
    width: 610px;
    height: 210px;
    font-family: 'Lato';
    margin-bottom: 29px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
`
const ImgWrapper = styled.img`
    margin: 15px;
    width:50px;
    height:50px;
    border-radius: 50%;
    object-fit: cover;
`
const Main = styled.form`
    width:85%;
    height:100%;
    margin-right: 25px;
    background-color: #FFFFFF ;
`
const Answer = styled.h1`
    font-size: 20px;
    color: #707070;
    margin-top: 10px;
    margin-bottom: 10px;
`
const LinkInput = styled.input`
    width:100%;
    height:30px;
    background-color: #EFEFEF;
    border-radius:5px;
    margin-top: 10px;
    border: unset;
    ::placeholder{
        font-size: 15px;
        font-weight: 300;
        color: #949494;
}
`
const TextInput = styled.input`
    width:100%;
    height: 66px;   /* ARRUMAR ISSO AE */
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
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 10px;
    button{
        width: 100px;
        height: 30px;
        margin-top: 10px;
        background-color: #1877F2;
        border-radius: 5px;
        color: #FFF;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
}
`

