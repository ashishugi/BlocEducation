import React from "react";

import NavbarQuiz from "./NavbarQuiz";
// import MiddleSection from "../MainPage/MiddleSection";
import CarouselPage from "./CarouselPage";
import {Wrapper} from "./style";
function Quiz() {
    return (
            <Wrapper>
                <div className="row">
                    <div className="col-md-3 col-sm-12" style={{textAlign:"left"}}>
                    <h1>teach</h1>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-12" >
                        <NavbarQuiz/>
                </div>
                <div className="col-md-9">
                    <CarouselPage/>
                </div>
                </div>
            </Wrapper>
    );
}

export default Quiz;