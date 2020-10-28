import React from 'react'
import "./header.css"
import {NavLink} from "react-router-dom"
function Header() {
    return (
        <div className="header">
            <div className="header_container">
                <NavLink className="logolink" to="/home">
                    <h3 className="logo">
            YourWinery
            </h3>
                </NavLink>
            <div className="header_links">
                <ul>
                    <li>
                        <NavLink to="/how">
                            What We Do
                        </NavLink>
                    </li>
                    <li><NavLink to="/about">
                            About Us
                        </NavLink></li>
                    <li><NavLink to="/quiz">
                            Quiz
                        </NavLink></li>
                    <li><NavLink to="/logIn">
                            Log In
                        </NavLink></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Header
