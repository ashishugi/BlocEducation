import React from "react";

function MainContentPart1(){
    return (
        <div className="main-content-part1">
            <div className="row content">
                <div className="col-md-6 col-sm-12">
                    <p>World-Class Education for anyone  , anywhere</p>
                    <h1>
                        An Education Product like No Other
                    </h1>
                    <button className="btn btn-danger">Let's Go</button>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img src={require("../images/study3.jpg")} alt="studyPic"/>
                </div>
            </div>
        </div>
    );
}

export default MainContentPart1;