import React from "react";



import BlockButton from "./BlockButton";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";


import {Button} from "./style";
function NavbarVertical(){
    return (
        <div>
             <nav className="navbar navbar-light bg-light">
                <ul className="navbar-nav">
                    <a class="navbar-brand" href="#">teach</a>
                    <div className="block-button">
                    <Link className="nav-link" to="/quiz"> <Button>Start Exam</Button></Link>
                    <Link className="nav-link" to="/"> <Button>Show Result</Button></Link>
                    </div>
                        <li className="nav-item">
                        <Link className="nav-link" to="/"> <HomeIcon/> Home</Link>

                            {/* <a class="nav-link active" href="#"></a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><LibraryBooksIcon/> Library</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><EventIcon/> Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><SettingsIcon/> Setting</a>
                        </li>
                    <Button noColor>Help</Button>

                </ul>
            </nav>
        </div>
    );
}

export default NavbarVertical;