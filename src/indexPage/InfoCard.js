import React from "react";

import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';

import { InfoCardWrapper,Text,OverlayCard,Wrapper5,OuterWrapper,SmallP,TextWrapper } from "./style";

function InfoCard() {
    return (
        <OuterWrapper>
            <InfoCardWrapper>
                <div className="row">
                    <div className="col-md-4 col-sm-12">    
                        <div className="row">
                            <div className="col">
                                <BookOutlinedIcon style={{fontSize:"300%" , fill:"#FF4500"}}/>
                                <OverlayCard >
                                     5K + <br/>Student Enrolled
                                </OverlayCard>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                    <div className="row">
                            <div className="col">
                                        <RecordVoiceOverOutlinedIcon style={{fontSize:"300%" , fill:"#FF4500"}}/>
                                        <OverlayCard >
                                            300 + <br/> Online Course Available
                                        </OverlayCard>
                                    </div>
                                </div> 
                    </div>
                    <div className="col-md-4 col-sm-12">    
                        <div className="row ">
                            <div className="col">
                                    <FaceOutlinedIcon style={{fontSize:"300%" , fill:"#FF4500"}}/>
                                    <OverlayCard >
                                        260 + <br/>Tutor Registered
                                    </OverlayCard>
                                </div>
                            </div> 
                    </div>
                </div>
            </InfoCardWrapper>
        </OuterWrapper>
    );
}

export default InfoCard;