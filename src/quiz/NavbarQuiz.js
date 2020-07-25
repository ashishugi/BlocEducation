import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlockButton from "../components/BlockButton";
import {Button,ButtonHelp,BrandName} from "./style";
function NavbarQuiz(){
    return (
        <div className="">
             <nav className="navbar navbar-light bg-light">
                <ul className="navbar-nav">
                    <BrandName>teach</BrandName>
                    <div className="block-button">
                    <Link className="nav-link" to="/"><Button>End Exam</Button></Link>
                    <Link className="nav-link" to="/quiz"><Button>Time Left</Button></Link>
                    </div>
                    <ButtonHelp>Help</ButtonHelp>

                </ul>
            </nav>
        </div>
    );
}

export default NavbarQuiz   ;