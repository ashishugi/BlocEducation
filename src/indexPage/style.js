import styled from "styled-components";
import LibraryImage from "../images/library.jpg";


const Wrapper1 = styled.div `
    background-image: url(${LibraryImage});
    padding: 12% 18%;
    text-align: center;
    color: white;
    font-weight: 900;
    background-repeat:no-repeat;
    background-size:cover;
    @media (min-width:700px) and (max-width:1400px){
        background-repeat:no-repeat;
        background-size:cover;
    }
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
    padding-top:10%;
    padding-bottom:10%;
    padding-left:10%;
    padding-right:10%;
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
    text-align:center;
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
    @media (max-width:600) {
        padding:3%; 
        margin-top:5%;
        text-align:center;
    }
    
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
const NavbarWrapper = styled.div `
    padding-left:5%;
    padding-right:5%;
    padding-top:1%;
    padding-bottom:1%;
    background-color:black;
`
const OuterWrapper = styled.div `
    position:relative;
    @media (max-width:800px){
      display:none;   
    }
`
const InfoCardWrapper = styled.div `
    position:absolute;
    background-color:#404040;
    width:70%;
    left:16%;
    right:20%;
    top:-40px;
    z-index:1;
    border-radius:8px;
    text-align:center;
    padding-top:10px;
    padding-bottom:10px;
`
const Text = styled.span `
    color:white;
    font-weight:200;
    font-size:90%;
`
const TextWrapper = styled.span `
    float:right;
    text-align:left;
`
const CardWrapper = styled.div `
    background-color:black;
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
const OverlayImage = styled.div `
  position: absolute;
  background-color:red;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height:100%;
  width:100%;
  opacity: 0;
  transition: .5s ease;
  border:1px red;
  &:hover{
      opacity:0.7;
      background-color: red;
      color:white;
      font-weight:600;
  }
`
const BlogCardWrapper = styled.div `
    margin-bottom:30%;
    text-align:center;
    height:100%;
    width:100%;
`
const TutorWrapper = styled.div `
    margin-bottom:30%;
    text-align:center;
    height:100%;
    width:100%;
`

export {
    Wrapper1,
    TutorWrapper,
    BlogCardWrapper,
    Text,
    CardBody,
    CardWrapper,
    TextWrapper,
    OuterWrapper,
    InfoCardWrapper,
    H1,
    H3,
    H5,
    P,
    NavItem,
    NavbarWrapper,
    Wrapper2,
    Wrapper4,
    SmallP,
    Content,
    Bottom,
    SearchBar,
    Search,
    Wrapper3,
    Red,
    White,
    Line,
    SubscriptionInput,
    OverlayImage
};