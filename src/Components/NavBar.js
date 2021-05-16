import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import '../../src/styles/Navbar.css'

const NavBar = () => {
  return (
    <Navbar className="nav" style={{backgroundColor: '#0a192f'}} expand="lg">
        <div class="container">
        <Navbar.Brand ><h3 className="text-white">Portfolio</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active text-white">
                    <Link className="nav-link mr-3 text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3 text-white"  to="/about">About</Link>
                </li>   
                <li className="nav-item">
                    <Link className="nav-link mr-3 text-white" to="/portfolio">Portfolio</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link mr-3 text-white" to="/blogs">Blogs</Link>
                </li> 
                <li className="nav-item">
                    <Link className="nav-link mr-3 text-white" to="/contact">Contact</Link>
                </li> 
                </ul>  
        </Navbar.Collapse>
        </div>
    </Navbar>
  );
};

export default NavBar;
