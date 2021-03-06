import React from "react";

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";

import MultiCarousel from "./MultiCarousel";
import coursesData from "./coursesData";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseCard from "./CourseCard";
import { H3 } from "./style";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };    
function StartExam() {

    return (
        <>
          <H3>Your Courses</H3>
            <Carousel responsive={responsive}>
                {coursesData.map((details,index)=>{
                        console.log(details);
                        return (
                          <Link className="nav-link" to="/">
                              <CourseCard 
                              desc = {details.courseName} 
                              imgSrc={details.courseImageSrc} 
                              key={details.courseId}/> 
                          </Link>
                            );
                    })}
            </Carousel>
        </>
    );
}

export default StartExam;