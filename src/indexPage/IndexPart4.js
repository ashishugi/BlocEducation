import React from "react";


import StopIcon from '@material-ui/icons/Stop';
import quizData from "./quizData";
import QuizCards from "./QuizCards";
import {Wrapper2,QuizWrapper ,H1,P,Content,SearchBar,Search} from "./style";
function IndexPart4() {
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/>  Test Your Knowledge <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>Browse Your Quizzes</H1>
            <SearchBar>
                <Search></Search>    
            </SearchBar>
            <QuizWrapper>
                <div className="row">
                    {quizData.map((list,index)=>{
                        return (
                            <>
                                    {list && list.map((details,index)=>{
                                        return (
                                            <div className="col-md-3 col-sm-12" >
                                                <QuizCards key={details.id} imgSrc={details.imgSrc}/>
                                            </div>
                                        );
                                    })}
                            </>
                        );
                    })}
                </div>
           </QuizWrapper>
        </Wrapper2>
    );
}


export default IndexPart4;