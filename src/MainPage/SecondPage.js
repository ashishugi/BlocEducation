import React from "react";

import NavbarVertical from "../components/NavbarVertical";
import MainContentPart2 from "../MainPage/MainContentPart2";
import {Wrapper2} from "./style";
function SecondPage(){
    return (
        <Wrapper2>
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <NavbarVertical/>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <MainContentPart2/>
                    </div>
                </div>
        </Wrapper2>
    );
}
export default SecondPage;