import React from "react";



function  Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                {props.courseName}
            </div>

        </div>
    );    
}

export default Card;