import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar(){
    return (
        <nav className = "navbar bg-dark justify-content-center container-fluid" >
            <li className = "nav-item">
                <Link to="home" className = "nav-link">HOME</Link>
            </li>
               <li className = "nav-item">
                <Link to ="/notes" className = "nav-link">NOTES</Link>
            </li>
               <li className = "nav-item">
                <Link to ="/new-note" className = "nav-link">NEW NOTE</Link>
            </li>
           
        </nav>




    );
    
}

export default Navbar;