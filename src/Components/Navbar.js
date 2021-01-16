import React from 'react'
import logo from "./img/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="nav">
                <ul >
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SPECIFCATIONS</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">CONTENT</a></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
