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
        <TutorWrapper>
                <CardWrapper>
                    <div>
                        <img style={{backgroundColor:"red"}}
                        src={props.imgSrc} style={{height:"200px" , width:"200px"}} 
                        onMouseOver={handleMouseOut} 
                        onMouseOut={handleMouseOut} />
                    </div>
                    {!name?<OverlayImage>
                        <div class="text">Hello World</div>
                    </OverlayImage>:""}
                </CardWrapper>
        </TutorWrapper>
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