import styled from "styled-components"
import Post from "../Post/Post.js"
import FormBox from "../FormBox/FormBox.js"
import Trending from "../Trending/Trending.js"

export default function TimeLine() {

    return (
        <Wrapper>

            <ContentWrapper>
                <Title>
                    <h1>timeline</h1>

                </Title>

                <PostWrapper>
                    <FormBox />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </PostWrapper>

            </ContentWrapper>

            <Wrapper2>
                <TrendingWrapper>
                    <Trending />
                </TrendingWrapper>
            </Wrapper2>

        </Wrapper>

    )
}

const Wrapper = styled.div`
width: 100%;
height: 100%;
padding-top: 80px;

background-color: #333333 ;

display: flex;
justify-content: center;

`
const Wrapper2 = styled.div`
height: 500px;
width: 21vw;

position:relative;
`
const ContentWrapper = styled.div`
width: 42vw;

display: flex;
flex-direction: column;
`

const Title = styled.div`
width:100%;
display: flex;
justify-content: flex-start;

h1{
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Oswald';
}

`
const PostWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
/* background-color: red; */

border-radius: 10px;

`
const TrendingWrapper = styled.div`
height: 100%;
/* background-color: aqua; */
position:absolute;
top:50px;
`
