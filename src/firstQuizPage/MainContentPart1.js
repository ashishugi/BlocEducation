import React from "react";

import MultiCarousel from "./MultiCarousel";
import {Wrapper,Content} from "./style";
import StartExam from "./StartExam";
import YourCourses from "./YourCourses";
function MainContentPart1(){
    return (
        <Wrapper>
                <Content>
                    <StartExam/>
                </Content>
               <Content>
                    <YourCourses/>
               </Content>
        </Wrapper>
    );
}

export default MainContentPart1;