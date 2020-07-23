import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import Carousel from "./Carousel";
import CourseData from "../data/courses";
function MainContentPart2(){
    return (
        <div className="container">
            <div className="">
                <div >
                    <input className="search-bar form-control mr-sm-2" type="search" placeholder="Search in the Library" aria-label="Search"/>
                </div>
                <h1 >Start exam in this Course</h1>

                <div className="row holding-card">
                    {CourseData.map((values,index)=>{
                        return (
                            <div className="row card-class">
                                <Carousel key={values.courseId} courseName={values.courseName} courseImage={values.courseImageSrc} />
                            </div>
                        )
                    })}
                </div>
             </div>
        </div>
    );
}

export default MainContentPart2;