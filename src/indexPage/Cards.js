import React from "react";
import Card from 'react-bootstrap/Card';

import {CardWrapper,OverlayImage,TutorWrapper} from "./style";
function Cards(props){
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
                <>
                    <div onMouseOver={handleMouseOut} 
                        onMouseOut={handleMouseOut}  style={{margin:"2%"}}>
                        <img
                        src={props.imgSrc} style={{height:"200px" , width:"100%"}} 
                        />
                    </div>
                    {name?<h1 style={{color:"white"}}>{props.name}</h1>:""}
                </>
    );
}

export default Cards;

{/* <div   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
<Card style={{ width: '15rem',marginTop:"3%",marginBottom:"3%"}}>
<Card.Img onMouseOver={handleMouseOver}  variant="top" style={{height:"200px" , width:"100%",objectFit:"cover"}} src={props.imgSrc}  />
<Card.Text >
    <OverlayImage style={{paddingBottom:"0"}}>
    {props.name}
</OverlayImage>
</Card.Text>
</Card>
</div> */}