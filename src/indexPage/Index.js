import React from "react";

import Navbar from "./Navbar";
import IndexPart1 from "./IndexPart1";
import IndexPart2 from "./IndexPart2";
import IndexPart3 from "./IndexPart3";
import IndexPart4 from "./IndexPart4";
import IndexPart5 from "./IndexPart5";
import IndexPart6 from "./IndexPart6";
import InfoCard from "./InfoCard";
function Index(){
    return (
        <div className="fluid">
            <Navbar/>
            <IndexPart1/>
            <InfoCard/>
            <IndexPart2/>
            <IndexPart3/>
            <IndexPart4/>
            <IndexPart5/>
            <IndexPart6/>
        </div>
    );
}

export default Index;