import styled from "styled-components";

const Wrapper1 = styled.div `
    background-image: url('../src/images/study2.png');
    padding: 12% 18%;
    text-align: center;
    background-color: red;
    color: white;
    font-weight: 900;
`
const H1 = styled.h1 `
    color: white;
    font-weight: 600;
`
const P = styled.p `
    font-size: 120%;
    color: grey;
`
const Wrapper2 = styled.div `
    padding: 10% 14%;
    background-color: black;
    text-align: center;
`
const Wrapper3 = styled.div `
    padding-top: 5%;
    padding-bottom: 10%;
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgba(46, 2, 2, 0.829);
    text-align: center;
`
const SmallP = styled.p `
    font-size: 85%;
    color: white;
    font-weight: 100;
`
const H5 = styled.h5 `
    color: white;
`
const Content = styled.section `
    margin-top:4%;
    padding-top:5%;
`
const SearchBar = styled.div `
    margin-top: 13%;
    margin-bottom: 5%;
    border-radius: 130px;
    background-color:black;
`
const Search = styled.input.attrs({ type: 'search', placeholder: "Search Type course name which quiz you are looking ?" })
`
    border-radius: 130px;
    background-color:black;
    color:white;
    width:100%;
    padding-left:5%;
    padding-right:5%;
    padding-top:1%;
    padding-bottom:1%;
    font-weight:700;
    border:0px solid black;
    &:hover{
        border: solid white;
        /* transition-delay:0.2s; */
        transition: all .4s ease;

    }
`
const TutorImg = styled.img `
    margin-top: 3%;
    /* padding: 10%; */
    height: 100%;
    width: 100%;
`
const H3 = styled.h3 `
    color:white;
    padding-bottom:3%;
    
`
const Red = styled.span `
    color:red;
    font-size:150%;
`
const White = styled.span `
    color:white;
    font-size:150%;
`
const Line = styled.span `
    text-decoration:underline red;
    
`
const SubscriptionInput = styled.input.attrs({ type: "text", placeholder: "Email Address" })
`
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    padding-left:5%;
    width:50%;
    font-weight:300;
`
const Wrapper4 = styled.div `
    padding-left:15%;
    text-align:left;
`
const Bottom = styled.div `
    color:white;
    font-weight:100;
    background-color: rgba(46, 2, 2, 0.829);
    font-size:80%;
    text-align:center;
    padding-bottom:15px;
    padding-left:10px;
    padding-right:10px;

`
const NavItem = styled.span `
    color:white;
`
export { Wrapper1, H1, H3, H5, P, NavItem, Wrapper2, Wrapper4, SmallP, Content, Bottom, SearchBar, Search, Wrapper3, Red, White, Line, SubscriptionInput };