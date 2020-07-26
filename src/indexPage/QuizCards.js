import React from "react";
import Card from 'react-bootstrap/Card';

import {CardWrapper,OverlayImage} from "./style";
function QuizCards(props){
    const [name , setName] = React.useState(false);
    function handleMouseOver(){
        console.log(name);
        setName(true);
    }
    function handleMouseOut(){
        console.log(name);
        setName(false);
    }
    return (
        <CardWrapper style={{textAlign:"center"}}   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <Card style={{ width: '15rem',marginTop:"3%",marginBottom:"3%"}}>
                <Card.Img onMouseOver={handleMouseOver}  variant="top" style={{height:"200px" , width:"100%",objectFit:"cover"}} src={props.imgSrc}  />
                <Card.Body style={!name? {fontWeight:"900",backgroundColor:"black" , color:"red"}:{fontWeight:"900", backgroundColor:"red",color:"white"}}>
                    <Card.Title style={{fontSize:"100%"}}>Business Management</Card.Title>
                    <button className="btn" style={!name? {backgroundColor:"grey" ,fontSize:"90%", color:"white"}:{ fontSize:"90%",backgroundColor:"white",color:"red"}}>Browse Quizzes</button>
                </Card.Body>
            </Card>
        </CardWrapper>
    );
}

export default QuizCards;