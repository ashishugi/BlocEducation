import styled from "styled-components";


const P = styled.p `
    font-size: 90%;
    color: orange;
    font-weight: 600;
`
const H1 = styled.h1 `
    font-weight: 800;
    padding-top: 5%;
    padding-bottom: 5%;
`
const Button = styled.button `
    background-color:blue;
    color:white;
    padding:3% 4%;
    border-radius:10px;
    &:hover{
        background-color:orange;
        transition-delay:0.1s;
        color:black;
    }
`
const Img = styled.img `
    height: 100%;
    width: 100%;
`
const Content = styled.div `
    text-align: center;
    margin-top: 3%;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 7%;
    padding-right: 7%;
`
const Wrapper = styled.section `
    margin-top: 5%;
    padding-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 7%;
`
const Wrapper2 = styled.section `
    padding: 7% 10%;
    margin-bottom: 2%;
`

const SearchBar = styled.input.attrs({ type: 'search', placeholder: " search in library" })
`
    border: 1px solid blue;
    border-radius: 30px;
    width: 65%;
`
const Heading = styled.h1 `
    margin-top: 5%;
    font-weight: 800;
    color: orange;
`
const Wrapper3 = styled.div `
    margin: 3%;
    padding-top: 7%;
`

export { P, H1, Button, Img, Content, Wrapper, Wrapper2, SearchBar, Heading, Wrapper3 };