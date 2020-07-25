import React from "react";

import {OptionButton} from "./style";
function Option(props){
    return (
        <OptionButton className="btn btn-option btn-info">{props.title}</OptionButton>
    );
}

export default Option;