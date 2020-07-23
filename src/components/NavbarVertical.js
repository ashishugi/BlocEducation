import React from "react";
import BlockButton from "./BlockButton";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
function NavbarVertical(){
    return (
        <div>
             <nav className="navbar navbar-light bg-light">
                <ul className="navbar-nav">
                    <a class="navbar-brand" href="#">teach</a>
                    <div className="block-button">
                        <BlockButton name="Start Exam"/>
                        <BlockButton name="Show Result"/>
                    </div>
                        <li className="nav-item">
                            <a class="nav-link active" href="#"><HomeIcon/> Home</a>
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
                    <div className="block-button">
                        <BlockButton name="Help"/>
                    </div>

                </ul>
            </nav>
        </div>
    );
}

export default NavbarVertical;