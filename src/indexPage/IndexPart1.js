import React from "react";

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";

import {Wrapper1,H1} from "./style";
function IndexPart1() {
    return (
        <Wrapper1>
                <H1>Inventive Solution <div>for Education</div></H1>    
            <br/>
            <Link className="nav-link" to="/firstpage"><button className="btn btn-warning">Our Courses</button></Link>
        </Wrapper1>
    );
}
export default IndexPart1;