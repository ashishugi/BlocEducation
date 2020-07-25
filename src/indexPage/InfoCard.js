import React from "react";

import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';

import { InfoCardWrapper,Text,Wrapper5,OuterWrapper,SmallP } from "./style";

function InfoCard() {
    return (
        <OuterWrapper>
            <InfoCardWrapper>
                <div className="row">
                    <div className="col-md-4 col-sm-12">    
                            <BookOutlinedIcon style={{fontSize:"400%" , fill:"#dc3545"}}/>
                            <Text> 5K + </Text><br/>
                            <Text>Student Enrolled</Text>
                    </div>
                    <div className="col-md-4 col-sm-12">
                            <RecordVoiceOverOutlinedIcon style={{fontSize:"400%" , fill:"#dc3545"}}/>
                            <Text> 300 + </Text><br/>
                            <Text>Online Course Available</Text>
                    </div>
                    <div className="col-md-4 col-sm-12">    
                            <FaceOutlinedIcon style={{fontSize:"400%" , fill:"#dc3545"}}/>
                            <Text> 260 + </Text><br/>
                            <Text>Tutors Available</Text>
                    </div>
                </div>
            </InfoCardWrapper>
        </OuterWrapper>
    );
}

export default InfoCard;