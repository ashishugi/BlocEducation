import React from "react";

import {OptionButton} from "./style";
function Option(props){
    return (
        <OptionButton style={{height:"100%" , width:"60%",margin:"1%"}} className="btn btn-option btn-info">{props.title}</OptionButton>
    );
}

export default Option;