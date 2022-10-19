import styled from "styled-components"
import Post from "../Components/Post/Post"
import Trending from "../Components/Trending/Trending"

export default function UserPage() {
    return (

        <Wrapper>
            <Title>
                <h1>nome usuario</h1>
            </Title>
             <ContentWrapper>
                 <PostWrapper>
                     <Post />
                     <Post />
                    
                 </PostWrapper>

                 <Trending />

             </ContentWrapper>

         </Wrapper>

    )
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
padding-top: 80px;

background-color: #333333;

display: flex;
flex-direction: column;
justify-content: center;
align-items:center;

/* position: relative; */

`

const Title = styled.div`
width:80vw;

h1{
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
    font-family: 'Oswald';
}

`

const ContentWrapper = styled.div`

width: 80vw;

display: flex;
justify-content: center;
align-items: center;

background: blue;

`

const PostWrapper = styled.div`
width: 80vw;
display: flex;
flex-direction: column;
background-color: red;

border-radius: 10px;


`
