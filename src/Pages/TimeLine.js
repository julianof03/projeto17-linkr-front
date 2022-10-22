import styled from "styled-components"
import Post from "../components/Post/Post.js"
import FormBox from "../components/FormBox/FormBox.js"
import Trending from "../components/Trending/Trending.js"
// import getConfig from '../Services/getConfig.js'
// import { getTimeLine } from '../Services/api.js'
// import { useEffect } from "react";
import React from 'react';


export default function TimeLine() {

    const array = [
        {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo #javascript AAAAAAAAA AAAAAA AAAAAA AAAA #AAAAA AAA AAAAAAAAA AAAAAAA AAAAAAA AAAAAAA AAAAAAAAAAAAAA AAAAAAA AAA AAA AAAA',
            link: 'link',
            likesQtd: 15,
            liked: true
        }, {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'outro #texto',
            link: 'link',
            likesQtd: 15,
            liked: false
        }, {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo #hashtag',
            link: 'link diferente',
            likesQtd: 15,
            liked: true
        }, {
            username: 'gojo satoru',
            img: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg',
            text: 'textinho bacanozo',
            link: 'link',
            likesQtd: 15,
            liked: false
        }

    ]

    // useEffect(() => {
    //     getTimeLine(getConfig)
    //         .then((res)=>{
    //             console.log('passou')
    //         })

    // }, [])

    return (
        <Wrapper>
            <MainContent>
                <Title> <h1>timeline</h1> </Title>
                <FormBox />
                {array.map((value, index) =>
                    <Post
                        key={index}
                        username={value.username}
                        img={value.img}
                        text={value.text}
                        link={value.link}
                        likesQtd={value.likesQtd}
                        liked={value.liked}
                    />
                )}
            </MainContent>

            <AsideContent>
                <TrendingWrapper>
                    <Trending />
                </TrendingWrapper>
            </AsideContent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 80px;
    background-color: #333333 ;
`
const AsideContent = styled.div`
    height: 500px;
    width: 21vw;
    position:relative;
    /* background-color: violet; */
`

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 610px;
    /* background-color: black; */
`
const Title = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 45px;
    h1{
        font-size: 43px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #fff;
        font-family: 'Oswald';
    }
`
const TrendingWrapper = styled.div`
height: 100%;
position:absolute;
top:50px;
/* background-color: aqua; */
`
