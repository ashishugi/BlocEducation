import React from "react";



function  Carousel(props) {
    return (
        <div className="card">
            <div className="card-body">
                {props.courseName}
            </div>

        </div>
    );    
}

export default Carousel;