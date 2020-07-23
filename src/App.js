import React from "react";

import NavbarHorizontal from "./components/NavbarHorizontal";
import MainContentPart1 from "./components/MainContentPart1";
import MiddleSection from "./components/MiddleSection";
import MainContentPart2 from "./components/MainContentPart2";
import NavbarVertical from "./components/NavbarVertical";
function App(){
    return (
        <div className="container" >
            <div className="part1">
                <NavbarHorizontal/>
                <MainContentPart1/>
            </div>
            <MiddleSection/>
            <div className="part2">
                <div className="row">
                    <div className="col-md-4">
                        <NavbarVertical/>
                    </div>
                    <div className="col-md-8">
                        <MainContentPart2/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default App;