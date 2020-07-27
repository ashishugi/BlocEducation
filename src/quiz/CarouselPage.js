import React from "react";


import QuestionCard from "../quiz/QuestionCard";
import questionData from "../quiz/questionData";
import Start from "../quiz/Start";
import Carousel from 'react-bootstrap/Carousel'
import InputQuestion from "./InputQuestion";
import {CarouselWrapper,Wrapper3,QuesText} from "./style";
function CarouselPage(){
    return (
                <Carousel controls={false} interval={50000} pause={false} style={{height:"100%" , width:"100%" }}>
                {questionData.map((data,index)=>{
                    return (
                        <Carousel.Item>
                        { data && data.map((details, index)=>{
                            return ( <>
                                <div style={{marginTop:"1%"}}>
                                   <QuesText>{details.id} .{details.ques}</QuesText>
                                </div>
                                {details.check ? (<QuestionCard options={details.options} />) : <InputQuestion />}
                            </>)
                        })}
                        </Carousel.Item>
                    )
                })}
            </Carousel>
    );
}

export default CarouselPage;