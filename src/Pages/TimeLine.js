import styled from "styled-components"
import Post from "../Components/Post/Post.js";
import FormBox from "../Components/FormBox/FormBox.js"
import Trending from "../Components/Trending/Trending.js"
import getConfig from '../Services/getConfig.js'
import { getTimeLine } from '../Services/api.js'
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../contexts/globalContext.js"


export default function TimeLine() {
    // 0 - 4;5 - 9; 10-14

    const { setHeader } = useContext(GlobalContext);
    setHeader(true);
    const { reRender, setReRender } = useContext(GlobalContext)
    const [posts, setPosts] = useState({
        array: [],
        size:0
    })
    const [n, setN] = useState(0)
    // const [arraySize, setArraySize] = useState(0)

    useEffect(() => {
        getTimeLine(getConfig)
            .then((res) => {
                setPosts({
                    array:res.data.slice(n, n + 20),
                    size: res.data.length
                })

            })

    }, [reRender])



    function nextPage() {
        if (n + 20 > posts.size) {

            let add = posts.size - n

            if (add > 0) {
                setN(n + add)
            }
            return
        }

        setN(n + 20)
        console.log('carregar página')

        window.scrollTo(0, 0)
        setReRender(!reRender)
    }

    return (

        <>
            {(posts.array.length === 0) ? (
                <div /* onClick={console.log('console',posts.array.length)} */
                >
                    LOADING
                </div> //CRIAR O LOADING
            ) : (

                <Wrapper>
                    <MainContent>
                        <Title> <h1>timeline</h1> </Title>
                        <FormBox />
                        {posts.array.map((value, index) =>
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
                        <NextPage
                            onClick={() => { nextPage() }}
                        >
                            Carregar mais
                        </NextPage>
                    </MainContent>

                    <AsideContent>
                        <TrendingWrapper>
                            <Trending />
                        </TrendingWrapper>
                    </AsideContent>
                </Wrapper>

            )
            }


        </>

    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-top: 80px;
    background-color: #333333 ;
`
const AsideContent = styled.div`
    height: 500px;
    width: 21vw;
    /* position:relative; */
    /* background-color: violet; */
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
/* position:absolute; */
top:50px;
/* background-color: aqua; */
`
const NextPage = styled.div`
width: 200px;
height: 70px;
margin-top: 20px;
margin-bottom:20px;


background-color: black;
border-radius: 10px;
color: white;

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;
`