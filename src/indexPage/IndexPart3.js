import React from "react";

import StopIcon from '@material-ui/icons/Stop';
import TutorData from "./TutorData";
import Card from "./Card";

import {Wrapper2,H1,P, Content } from "./style";
function IndexPart3(){
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/>  Learn New Skills <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>Popular Tutors</H1>
                <Content>
                        <div className="row">
                            {TutorData.map((value,index)=>{
                                console.log(value.imgSrc);
                                return (
                                    <div className="col-md-3 col-sm-12 ">
                                        <Card key={index} imgSrc={value.imgSrc}/>
                                        <br/>
                                    </div>
                                );
                            })}
                        </div>
                </Content>
        </Wrapper2>
    );
}

export default IndexPart3;