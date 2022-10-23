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

    const { reRender, setReRender } = useContext(GlobalContext)
    const [posts, setPosts] = useState({
        array: [],
        size:0
    })

    const [n, setN] = useState(0)
    const {deleteScreen, setDeleteScreen} = useContext(GlobalContext)

    useEffect(() => {
        getTimeLine(getConfig)
            .then((res) => {
                setPosts({
                    array:res.data.slice(n, n + 50),
                    Size: res.data.length
                })

                // console.log('arraySize',arraySize)

                console.log(posts)
                console.log(posts.array)

                // MUDAR 4 PARA 20
            })

    }, [reRender])

    function nextPage() {
        if (n + 50 > 1000000) {
            let add = 1000000 - n
            if (add > 0) setN(n + add)
            return
        }
        setN(n + 50)
        setReRender(!reRender)
    }

    function FunctionDeleteScreen(){
        return(
            <DeleteScreenHTML>
                
            </DeleteScreenHTML>
        )
    }

    return (

        <>
            {(posts.array.length === 0) ? (
                <div> LOADING </div>
            ) : (
                // {if(deleteScreen) { functionDeleteScreen()} }
                <Wrapper>
                    <MainContent>
                        <Title> <h1>timeline</h1> </Title>
                        <FormBox />
                        {console.log('POSTSS : ', posts)}
                        {posts.array.map((value, index) => 
                            <Post
                                id={value.id}
                                key={index}
                                username={value.username}
                                img={value.img}
                                text={value.text}
                                link={value.link}
                                likesQtd={value.likesQtd}
                                liked={value.liked}
                                postUserId={value.userId}
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
            )}
        </>

    )
}

const DeleteScreenHTML = styled.div`
    display: flex;
`

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