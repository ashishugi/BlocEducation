import React from "react";

import {BrandName} from "./style";
function NavbarHorizontal(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <BrandName>teach</BrandName>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item nav-item-horizontal active">
          <a className="nav-link " href="#">University <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item nav-item-horizontal">
          <a className="nav-link " href="#">Request or Free Cousellor</a>
        </li>
        <li className="nav-item nav-item-horizontal">
          <a className="nav-link " href="#" >Sign Up</a>
        </li>
        <button className="btn btn-outline-success navbar-button">Get Start</button>
      </ul>
    </div>
  </nav>
  );
}
export default NavbarHorizontal;