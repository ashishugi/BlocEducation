import React from "react";



import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";


import {Button} from "./style";
function NavbarVertical(){
    return (
             <div >
                    <div className="navbar-nav" >
                                    <div >
                                        <Link className="nav-link" to="/"> <Button>End Exam</Button></Link>
                                        <Link className="nav-link" to="/quizPage1"> <Button>Time Left</Button></Link>
                                    </div>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/"> <HomeIcon/> Home</Link>
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

                    </div>
            </div>
    );
}

export default NavbarVertical;