import React from "react";

import NavbarVertical from "./NavbarVertical";
import MainContentPart1 from "./MainContentPart1";
import {Wrapper , H1 }  from "./style";
function QuizPage1(){
    return (
        <Wrapper>
           <div className="row">
               <div className="col-md-3 col-sm-12">
                    <NavbarVertical/>
               </div>
               <div className="col-md-9">
                   <MainContentPart1/>
               </div>
           </div>
        </Wrapper>
    );
}
export default QuizPage1;