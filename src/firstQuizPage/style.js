import styled from "styled-components";


const Wrapper = styled.section `
    padding: 0% 7%;
    padding-left:0;
    /* margin-bottom: 2%; */
    height:100%;
    width:100%;
    /* text-align:center; */
    background-size:cover;
    top:0;
    left:0;
`
const Wrapper2 = styled.section `
    padding-left:10%;
    padding-right:10%;
    padding-top:2%;
    
`
const Button = styled.button `
    margin-top: 15%;
    margin-bottom: 15%;
    border-radius: 20px;
    margin-top: 13%;
    width: 100%;
    padding-top:5%;
    font-weight: 600;
    color:white;
    background-color:${(props)=>(props.noColor?"red":"blue")};
    &:hover{
        background-color:blue;
        background-color:${(props)=>(props.noColor?"grey":"#0275d8")};

    }
`
const H3 = styled.h3 `
    font-weight:600;
    text-align:left;
`

const CardWrapper = styled.div `
    text-align:center;
    margin:5%;
    height:100%;
    width:100%;
`
const CardBody = styled.div `
    height:90px;
    width:100%;
    text-align:center;
    padding:3%;
    font-family:sans-serif;
    font-weight:700;
`
const CardTitle = styled.div `
    padding:3% 4%;
`
const CardDeck = styled.div `
    height:217px;
    width:229px;
`
const SearchBar = styled.input.attrs({ type: "search", placeholder: "Search In Library" })
`
    padding-left:2%;
    border-radius:15px;
    width:50%;
    @media (max-width:700px) {
     width:100%;   
    }
`
const Content = styled.div `
    margin:1%;
`
const FixedWrapper = styled.div `
    /* background-attachment: fixed;
    position:fixed; */
`
export { FixedWrapper, CardBody, Wrapper2, CardTitle, Wrapper, CardWrapper, H3, Button, CardDeck, SearchBar, Content };