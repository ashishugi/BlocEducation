import React from "react";

import NavbarQuiz from "./NavbarQuiz";
// import MiddleSection from "../MainPage/MiddleSection";
import Carousel from "./Carousel";
import {Wrapper} from "./style";
function Quiz() {
    return (
        <div className="container">
            <Wrapper>
                <div className="row">
                    <div className="col-md-4 ">
                        <NavbarQuiz />
                    </div>
                    <div className="col-md-8">
                        <Carousel/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Quiz;