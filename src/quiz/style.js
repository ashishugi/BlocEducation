import styled from "styled-components";


const Wrapper = styled.div `
    border-radius: 30px;
    margin-top: 5%;
    padding-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 7%;
`

const Button = styled.button `
    margin-top: 15%;
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
    width:100%;
    height:100%;
    text-align:center;
`
const H1 = styled.h1 `
    font-weight: 800;
`

const P = styled.p `
    font-weight: 600;
    color: orange;
`
const StartWrapper = styled.div `
    text-align: center;
    width: 100%;
    height: 100%;
`
export { Wrapper, Wrapper2, Wrapper3, CarouselWrapper, Button, ButtonHelp, BrandName, OptionButton, H1, P, StartWrapper };