import React from "react";

import MultiCarousel from "./MultiCarousel";
import {Wrapper} from "./style";
import StartExam from "./StartExam";
import YourCourses from "./YourCourses";
function MainContentPart1(){
    return (
        <Wrapper>
                <StartExam/>
                <YourCourses/>
        </Wrapper>
    );
}

export default MainContentPart1;