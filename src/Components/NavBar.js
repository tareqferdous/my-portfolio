import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import '../../src/styles/Navbar.css'

const NavBar = () => {
  return (
    <Navbar className="nav" style={{backgroundColor: '#0a192f'}} expand="lg">
        <div class="container">
        <Navbar.Brand ><h3 className="text-white">Portfolio</h3></Navbar.Brand>

        <small><Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background: 'DarkGrey', border: '2px solid DarkGrey', fontSize: '14px'}} /></small>
        <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active text-white">
                    <Link className="nav-link mr-3 text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white"  href="#about">About</a>
                </li>   
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" href="#portfolio">Portfolio</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" href="#blogs">Blogs</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" href="#contact">Contact</a>
                </li> 
                </ul>  
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
};

export default NavBar;
