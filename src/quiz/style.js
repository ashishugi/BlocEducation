import styled from "styled-components";


const Wrapper = styled.div `
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
const ButtonHelp = styled.button `
    margin-top: 55%;
    margin-bottom: 15%;
    border-radius: 20px;
    margin-top: 13%;
    width: 110%;
    padding-top:5%;
    font-weight: 600;
    color:white;
    background-color:${(props)=>(props.noColor?"red":"blue")};
    &:hover{
        background-color:blue;
        background-color:${(props)=>(props.noColor?"grey":"#0275d8")};

    }
`
const BrandName = styled.h1 `
    font-size: 220%;
`

const OptionButton = styled.button `
    background-color:grey;
    margin:1%;
    border-radius:20px;
    padding-left:30px;
    padding-right:30px;
`
const Wrapper2 = styled.div `
    text-align:center;
`
const Wrapper3 = styled.div `
    margin-bottom:10%;
`
const CarouselWrapper = styled.div `
    text-align:center;
    margin-bottom:10%;
`
const H1 = styled.h1 `
    font-weight: 800;
`

const P = styled.p `
    font-weight: 600;
    color: orange;
`
const QuesText = styled.h5 `
    font-weight:600;
`
const StartWrapper = styled.div `
    text-align: center;
    width: 100%;
    height: 100%;
`
const InputArea = styled.input.attrs({ type: "textArea", placeholder: "Write your answer here ... ", row: "4", cols: "50" })
`
    border-radius:20px;
    background-color:#BBBDC2;
    width:90%;
    color:white;
    top:0;
`
export { Wrapper, Wrapper2, Wrapper3, InputArea, CarouselWrapper, Button, ButtonHelp, BrandName, OptionButton, H1, P, StartWrapper, QuesText };