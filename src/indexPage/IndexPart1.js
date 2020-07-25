import React from "react";

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";

import {Wrapper1,H1} from "./style";
function IndexPart1() {
    return (
        <Wrapper1>
                <H1>Inventive Solution <div>for Education</div></H1>    
            <br/>
            <Link  to="/firstpage"><button className="btn btn-danger">Our Courses</button></Link>
        </Wrapper1>
    );
}
export default IndexPart1;