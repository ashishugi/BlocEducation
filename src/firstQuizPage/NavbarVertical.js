import React from "react";



import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';

import {BrowserRouter as Router , Route ,Link} from "react-router-dom";


import {Button,Wrapper} from "./style";
function NavbarVertical(){
    return (
             <Wrapper className="navbar navbar-toggleable-sm navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
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
                </div>
            </Wrapper>
    );
}

export default NavbarVertical;