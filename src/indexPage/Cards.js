import React from "react";
import Card from 'react-bootstrap/Card';

import {CardWrapper,OverlayImage,TutorWrapper,ImageWrapper,SpecialText} from "./style";
function Cards(props){
    const [name , setName] = React.useState(false);
    function handleMouseOver(){
        setName(true);
    }
    function handleMouseOut(){
        setName(false);
    }
    return (
        <div   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Card style={{margin:"2%",border:"0px"}}>
            <img onMouseOver={handleMouseOver}  variant="top" style={{height:"200px" , width:"100%",objectFit:"cover"}} src={props.imgSrc}  />
            <>
                <OverlayImage style={{paddingBottom:"0"}}>
                    <SpecialText>{props.name}</SpecialText>
                </OverlayImage>
            </>
        </Card>
        </div>
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


// <>
// <div style={{margin:"2%"}}>
//     <ImageWrapper style={name?{opacity:"0.5"} : {opacity:"1"}}>
//         <img onMouseOver={handleMouseOver} 
//             onMouseOut={handleMouseOut}
//             src={props.imgSrc} style={{height:"200px" , width:"100%"}} 
//         />
//         {name?<SpecialText style={{opacity:"1"}}>{props.name}</SpecialText>:''}
//     </ImageWrapper>
// </div>

// </>