import React from "react";


import QuestionCard from "../quiz/QuestionCard";
import questionData from "../quiz/questionData";
import Start from "../quiz/Start";
import {CarouselWrapper,Wrapper3} from "./style";
function Carousel(){
    return (
        <CarouselWrapper>
            <div  id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="false">
        
        <div className="carousel-inner">
            <div className="carousel-item active">
                    <Start />
            </div>
          {questionData.map((data,index)=>{
              return (
                <Wrapper3 className="carousel-item ">
                { data && data.map((details, index)=>{
                    return ( <>
                          <div>
                              {details.ques}
                          </div>
                          <QuestionCard options={details.options} />
                    </>)
                })}
                </Wrapper3>
              )
          })}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
        </CarouselWrapper>
    );
}

export default Carousel;