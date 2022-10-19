import styled from "styled-components";

export default function FormBox() {




    return (
        <FormBoxWrapper>
            <ImgWrapper src='https://uploads.jovemnerd.com.br/wp-content/uploads/2021/09/jujutsu-kaisen-0-gojo-nova-imagem.jpg' />
            <Main>
                <Answer>
                    What are you going to share today?
                </Answer>

                <LinkInput placeHolder='http...'>
                </LinkInput >
                
                <TextInput/>

                <ButtonWrapper>
                    <button>Publish</button>
                </ButtonWrapper>
                
            </Main>
            

        </FormBoxWrapper>
    )
}

const FormBoxWrapper = styled.div`
width: 100%;
height: 250px;
margin-bottom: 10px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background-color: #FFFFFF;
border-radius: 16px;

display: flex;

font-family: 'Lato';
`
const ImgWrapper = styled.img`
margin: 10px;
width:70px;
height:70px;
border-radius: 50%;
object-fit: cover;

`
const Main = styled.div`
width:85%;
height:100%;
margin-left: 25px;
margin-right: 25px;
background-color: #fff ;
`
const Answer = styled.h1`
font-size: 20px;
color: #707070;

margin-top: 10px;
`

const LinkInput = styled.input`
width:100%;
height:30px;
background-color: #EFEFEF;
border-radius:5px;
margin-top: 10px;
border: unset;
`
const TextInput = styled.input`
width:100%;
min-height:100px;
background-color: #EFEFEF;
border-radius:5px;
border: unset;
margin-top: 10px;
`

const ButtonWrapper = styled.div`

width: 100%;
display: flex;
justify-content: flex-end;

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

}
`

