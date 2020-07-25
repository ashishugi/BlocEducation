import React from "react";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarsIcon from '@material-ui/icons/Stars';
import {BrowserRouter as Router , Route ,Link} from "react-router-dom";
import {Red ,White,NavItem} from "./style";
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/" style={{textDecoration:"none"}}><White><StarsIcon/> Bloc</White><Red>Edu</Red></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" id="navbar-list-item">
                        <li className="nav-item active">
                        <Link className="nav-link" to="/firstpage"><NavItem>Home</NavItem> <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavItem>Find Tutors</NavItem></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavItem>Become Tutor</NavItem></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavItem>Enterprise</NavItem></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <NavItem><AccountCircleIcon/> Abc</NavItem>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Courses</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Sign Out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;