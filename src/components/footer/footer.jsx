import React from 'react'
import "./footer.css"
import {NavLink as Link} from "react-router-dom"
function Footer() {
    return (
        <div className="footer">
           <div className="footer_container">
                <h4>YourWinery &copy; 2020 </h4>
            <div className="social">
            <Link to="/home">
            <i class="fab fa-instagram fa-2x"></i></Link>
            <Link to="/home">
                <i class="fab fa-facebook fa-2x"></i>
            </Link>
            </div>
           </div>
        </div>
    )
}

export default Footer
