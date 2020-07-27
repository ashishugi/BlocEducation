import React from "react";



import { CardWrapper } from "./style";

function CourseCard(props) {
    return (
        <div className="card">
            <img src={props.imgSrc} style={{height:"200px" , width:"100%"}}/>
            <div className="card-body">
                {props.desc}
            </div>
        </div>

    );
}

export default CourseCard;