import React from "react";

import CourseData from "../data/courses";
import Option from "./Option";
import {Wrapper2} from "./style";
function QuestionCard(props){
    console.log(props);
    return (
        <Wrapper2>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Option title={props.options.op1}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <Option title={props.options.op2}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12  ">
                    <Option title={props.options.op3}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <Option title={props.options.op4}/>
                </div>
            </div>
        </Wrapper2>
    );
}
export default QuestionCard;