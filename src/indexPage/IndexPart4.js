import React from "react";


import StopIcon from '@material-ui/icons/Stop';
import quizData from "./quizData";
import QuizCards from "./QuizCards";
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
                <div className="row" style={{textAlign:"center"}}>
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
           </Content>
        </Wrapper2>
    );
}


export default IndexPart4;