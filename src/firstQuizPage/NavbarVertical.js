import React from "react";



import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";


import {Button,Wrapper ,FixedWrapper} from "./style";
function NavbarVertical(){
    return (
             <div >
                    <div className="navbar-nav" >
                                <FixedWrapper>
                                    <div >
                                        <Link className="nav-link" to="/quiz"> <Button>Start Exam</Button></Link>
                                        <Link className="nav-link" to="/firstpage"> <Button>Show Result</Button></Link>
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
                                </FixedWrapper>

                    </div>
                
            </div>
    );
}

export default NavbarVertical;