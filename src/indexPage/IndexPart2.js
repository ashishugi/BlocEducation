import React from "react";

import StopIcon from '@material-ui/icons/Stop';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import NextWeekIcon from '@material-ui/icons/NextWeek';

import {Wrapper2,H1,H5,P ,SmallP} from "./style";
function IndexPart2(){
    return (
        <Wrapper2>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/>  Sort About Us  <StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/></P>
            <H1>How it Works</H1>
            <br/>
            <br/>
            <div className="horizontal-line">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <div className="icon">
                            <CastForEducationIcon style={{fontSize:"500%" , fill:"red"}}/>
                        </div>
                        <br/>
                        <H5>Choose a tutor</H5>
                        <SmallP>Learn from the best of the Country</SmallP>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <PeopleAltIcon  style={{fontSize:"500%" , fill:"red"}}/>
                        <br/>
                        <H5>Collaborate</H5>
                        <SmallP>Some text will be placed here </SmallP>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <NextWeekIcon  style={{fontSize:"500%" , fill:"red"}}/>
                        <br/>
                        <H5>Subscribe </H5>
                        <SmallP>Again Some Text will be placed here</SmallP>
                    </div>
                </div>
            </div>
        </Wrapper2>
    );
}

export default IndexPart2;