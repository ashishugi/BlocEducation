import React from "react";



import StopIcon from '@material-ui/icons/Stop';
import blogsData from "./blogsData";
import Blog from "./Blog";
import {Wrapper2 ,H1,P, Content} from "./style";
function IndexPart5() {
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/> Knowledge Sharing <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>Blogs</H1>
        <Content>
            <div className="row">
                {blogsData.map((value,index)=>{
                    console.log(value.imgSrc);
                    return (
                        <div className="col-md-3 col-sm-12">
                            <Blog key={index} imgSrc={value.imgSrc} title={value.title} desc={value.desc}/>
                            <br/>
                        </div>
                    );
                })}
            </div>
        </Content>
    </Wrapper2>
    );
}


export default IndexPart5;