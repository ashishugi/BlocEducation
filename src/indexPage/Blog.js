import React from "react";



function Blog(props){
    return (

        <div className="card">
            <div>
                <img style={{height:"200px" , width:"200px"}} src={props.imgSrc} />
            </div>
            <div style={{backgroundColor:"red"}}>
                <div className="card-title" style={{color:"white" ,fontWeight:"900"}} >{props.title}</div>
                <div className="card-text" style={{color:"white"}}>
                    {props.desc}
                </div>
            </div>
        </div>
    );
}


export default Blog;