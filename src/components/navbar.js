import React from 'react';
import {NavLink} from 'react-router-dom'
// import '../App.css'

export default function Navbar() {
    return(
        <div>
            <div className="topcontrol">
                <i className="fa fa-angle-up" aria-hidden="true" onclick="topFunction()"></i>
            </div>
            <div id="navbar">
                {/* <NavLink to="#skills">About</NavLink>
                <NavLink to="#projects">About</NavLink>
                <NavLink to="#contact">About</NavLink> */}
                <ul>
                    <li><a href="#skills">About</a>
                    </li>
                    <li><a href="#projects">Work</a>
                    </li>
                    <li><a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}