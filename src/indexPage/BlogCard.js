import React from "react";

import Card from 'react-bootstrap/Card';
import {CardWrapper,OverlayImage,BlogCardWrapper} from "./style";

function BlogCard(props) {



    const [name , setName] = React.useState(false);
    function handleMouseOver(){
        console.log(name);
        setName(true);
    }
    function handleMouseOut(){
        console.log(name);
        setName(false);
    }
    var currDate = Date();
    var today = currDate.get
    return(
        <BlogCardWrapper>
            <div style={{textAlign:"center"}}   onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div style={{ width: '15rem',marginTop:"3%",marginBottom:"3%"}}>
                    <img onMouseOver={handleMouseOver}   style={{height:"200px" , width:"100%",objectFit:"cover"}} src={props.imgSrc}  />
                    <Card.Body style={!name?
                        {fontWeight:"900",backgroundColor:"white" , color:"black"}:
                        {fontWeight:"900", backgroundColor:"red",color:"white" , transition:"0.6s ease"}}>
                        <Card.Title style={{fontSize:"100%"}}>{props.desc}</Card.Title>
                    </Card.Body>
                </div>
            </div>
        </BlogCardWrapper>

    );
}

export default BlogCard;