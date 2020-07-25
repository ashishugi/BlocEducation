import React from "react";



function Card(props){
    console.log(props.imgSrc);
    return (
        <div className="card ">
            <div className="card-body ">
                <img style={{height:"200px" , width:"200px"}} src={props.imgSrc}/>
            </div>
        </div>
    );
}

export default Card;