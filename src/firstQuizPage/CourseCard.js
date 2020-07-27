import React from "react";

import { CardWrapper ,CardBody  , CardTitle , CardDeck, H3} from "./style";

function CourseCard(props) {
    return (
        <div className="container">
            <CardDeck>
                <div className="card text-center" >
                    <div className="card-block">
                        <h4 class="card-title">
                            <img src={props.imgSrc} style={{height:"217px" , width:"100%"}}/>
                        </h4>
                    </div>
                    <div className="card-title" >
                        {props.desc}
                    </div>
                </div>
            </CardDeck>
            <div className="card-title" style={{color:"black"}}>
                        {props.desc}
            </div>
            {/* <H3>khj</H3> */}
        </div>

    );
}

export default CourseCard;


{/* 
        <CardWrapper>
            <div style={{ width: '15rem',marginTop:"3%",marginBottom:"3%"}}>
                <img src={props.imgSrc} style={{height:"200px" , width:"100%"}}/>
            </div>
            <CardBody>
                <CardTitle style={{fontSize:"100%"}}>{props.desc}</CardTitle>
            </CardBody>
        </CardWrapper> */}