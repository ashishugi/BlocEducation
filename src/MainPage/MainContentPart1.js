import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {P,H1,Button,Img, Content} from "./style";
function MainContentPart1(){
    return (
        <Content>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <P>World-Class Education for anyone  , anywhere</P>
                    <H1>
                        An Education Product like No Other
                    </H1>
                    <Link className="nav-link" to="/secondPage"> <Button >Let's Go</Button></Link>
                </div>
                <div className="col-md-6 col-sm-12">
                    <Img src={require("../images/study3.jpg")} alt="studyPic"/>
                </div>
            </div>
        </Content>
    );
}

export default MainContentPart1;