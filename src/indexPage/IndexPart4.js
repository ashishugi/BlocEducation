import React from "react";


import StopIcon from '@material-ui/icons/Stop';
import TutorData from "./TutorData";
import Card from "./Card";
import {Wrapper2 ,H1,P,Content,SearchBar,Search} from "./style";
function IndexPart4() {
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/>  Test Your Knowledge <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>Browse Your Quizzes</H1>
            <SearchBar>
                <Search></Search>    
            </SearchBar>
            <Content>
                <div className="row">
                    {TutorData.map((value,index)=>{
                        console.log(value.imgSrc);
                        return (
                            <div className="col-md-3 col-sm-12" >
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


export default IndexPart4;