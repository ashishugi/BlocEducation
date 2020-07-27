import styled from "styled-components";


const Wrapper = styled.section `
    padding: 5% 7%;
    /* margin-bottom: 2%; */
    height:100%;
    width:100%;
    text-align:center;
    background-size:cover;
    top:0;
    left:0;
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
const H3 = styled.h3 `
    font-weight:600;
    text-align:left;
`

const CardWrapper = styled.div `
    height:200px;
    width:200px;
    border-radius:30px;
`
export { Wrapper, CardWrapper, H3, Button };