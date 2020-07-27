import React from "react";

import Carousel from 'react-bootstrap/Carousel'
import StopIcon from '@material-ui/icons/Stop';
import TutorData from "./TutorData";
import Cards from "./Cards";
import Start from "../quiz/Start";
import {Wrapper2,H1,P, Content } from "./style";
function IndexPart3(){
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/>  Learn New Skills <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>Popular Tutors</H1>
            
                        <Carousel indicators={true} controls={false} slide={true} interval={50000000}>
                            
                                {TutorData.map((list,index)=>{
                                    return (
                                        <Carousel.Item>
                                            <div className="row justify-content-md-center">
                                                {list && list.map((details,index)=>{
                                                    return (
                                                        <div className="col-md-3 col-sm-12 justify-content-md-center">
                                                            <Cards key={details.id} name={details.name} imgSrc={details.imgSrc}/>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Carousel.Item>
                                    );
                                })}
                        </Carousel>
        </Wrapper2>
    );
}

export default IndexPart3;