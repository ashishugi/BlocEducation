import React from "react";

import NavbarHorizontal from "../components/NavbarHorizontal";
import MainContentPart1 from "./MainContentPart1";
import {Wrapper} from "./style";
function FirstPage(){
    return (
        <div className="container">
            <Wrapper>
                <NavbarHorizontal/>
                <MainContentPart1/>
            </Wrapper>
        </div>
    );
}
export default FirstPage;