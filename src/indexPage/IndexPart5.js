import React from "react";



import StopIcon from '@material-ui/icons/Stop';
import blogsData from "./blogsData";
import BlogCard from "./BlogCard";
import Carousel from 'react-bootstrap/Carousel'

import {Wrapper2 ,H1,P, Content} from "./style";
function IndexPart5() {
    return (
        <Wrapper2>
            <div>
                    <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/> Knowledge Sharing <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
                    <H1>Blogs</H1>
            </div>
            <div style={{paddingTop:"10%"}}>
                    <Carousel indicators={true} controls={false} slide={true} interval={50000000}>
                                    {blogsData.map((list,index)=>{
                                        return (
                                            <Carousel.Item>
                                                <div className="row justify-content-md-center">
                                                {list && list.map((details,index)=>{
                                                        return (
                                                            <div className="col-md-4 col-sm-12 justify-content-md-center">
                                                            <BlogCard key={details.id} imgSrc={details.imgSrc} title={details.title} 
                                                                desc={details.desc}/>
                                                        </div>
                                                        );
                                                    })}
                                                    </div>
                                            </Carousel.Item>
                                        );
                                    })}
                    </Carousel>
            </div>
    </Wrapper2>
    );
}


export default IndexPart5;