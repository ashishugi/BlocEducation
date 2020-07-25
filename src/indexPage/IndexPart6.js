import React from "react";

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StopIcon from '@material-ui/icons/Stop';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

import {Wrapper3 ,H1,NavItem ,H3 , P , Content ,Wrapper4,Bottom  , SmallP,Line,  SubscriptionInput} from "./style";
function IndexPart6() {
    return (
    <div>
        <Wrapper3>
            <P><StopIcon style={{fill: "red"}}/> <StopIcon style={{fill: "red"}}/> Contact Us <StopIcon style={{fill: "red"}}/>  <StopIcon style={{fill: "red"}}/></P>
            <H1>Get In Touch</H1>
            <Content>
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <LocationOnIcon style={{fontSize:"200%" , fill:"red"}}/> &nbsp;
                            <SmallP>Unit 154 , Sector 343 , greater Noida   </SmallP>
                            <br/>
                            <SmallP>India erawfeasdfsdfs</SmallP>
                        </div>
                        <div className="row">
                            <PhoneIcon style={{fontSize:"200%" , fill:"red"}}/> &nbsp;
                            <SmallP>0000 0000 000 (00 )</SmallP>
                        </div>  
                        <div className="row">
                            <EmailIcon style={{fontSize:"200%" , fill:"red"}}/>&nbsp;
                            <SmallP> getIntouch@getIntouch.com , kasdhfkjs@mymail.com</SmallP>
                        </div>
                        <br/><br/>
                            <div className="row">
                                <FacebookIcon style={{fontSize:"250%" , fill:"white" , margin:"2%"}}/>
                                <TwitterIcon style={{fontSize:"250%" , fill:"white" , margin:"2%"}}/>
                                <InstagramIcon style={{fontSize:"250%" , fill:"white", margin:"2%"}}/>
                                <LinkedInIcon style={{fontSize:"250%" , fill:"white", margin:"2%"}}/>
                                <TelegramIcon style={{fontSize:"250%" , fill:"white ", margin:"2%"}}/>
                            </div>
                            <br/>
                            <div className="row">
                                <SubscriptionInput></SubscriptionInput>
                                <button className="btn btn-lg btn-danger">Subscribe now</button>
                            </div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="row">
                            <div  className="col-md-6 col-sm-12">
                            <H3>Useful Links</H3>
                                <Wrapper4>
                                    <SmallP>Trading </SmallP>
                                    <SmallP>Business Management</SmallP>
                                    <SmallP>Loan Management </SmallP>
                                    <SmallP>Finance Management </SmallP>
                                    <SmallP>Tutor Section </SmallP>
                                    <SmallP>About Us </SmallP>
                                </Wrapper4>
                            </div>
                            <div  className="col-md-6 col-sm-12">
                                <H3>Account Info</H3>
                                <Wrapper4>
                                    <SmallP>Setting Account </SmallP>
                                    <SmallP>Login & Register</SmallP>
                                    <SmallP>Forget Password </SmallP>
                                    <SmallP>Login & Register </SmallP>
                                    <SmallP>Setting Account</SmallP>
                                    <SmallP>Login & Register</SmallP>
                                </Wrapper4>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
    </Wrapper3>
        <Bottom>
        <div className="row">
            <div className="col-md-6">
                &copy; 2018 Designed and Developed By Ooliy Technology
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-4">
                        License Privacy 
                    </div>
                    <div className="col-md-4">
                        Privacy &  Policy
                    </div>
                    <div className="col-md-4">
                        Terms Of Service
                    </div>
                </div>
            </div>
        </div>
        </Bottom>
    </div>
    );
}

export default IndexPart6;