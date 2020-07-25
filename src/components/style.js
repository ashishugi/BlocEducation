import styled from "styled-components";


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
const BrandName = styled.h1 `
    font-size: 220%;
`
export { Button, BrandName };