import React from "react";

import NavbarVertical from "./NavbarVertical";
import MainContentPart1 from "./MainContentPart1";
import {Wrapper2 , H1 ,SearchBar }  from "./style";
function QuizPage1(){
    return (
        <Wrapper2>
            <div className="row">
                <div className="col-md-3 col-sm-12" style={{textAlign:"left"}}>
                    <h1>teach</h1>
                </div>
                <div className="col-md-9 col-sm-12" style={{textAlign:"left"}} >
                    <SearchBar className="form-control"/>
                </div>
            </div>
           <div className="row">
               <div className="col-md-3 col-sm-12" >
                    <NavbarVertical/>
               </div>
               <div className="col-md-9">
                   <MainContentPart1/>
               </div>
           </div>
        </Wrapper2>
    );
}
export default QuizPage1;