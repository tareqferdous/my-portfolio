import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import '../../src/styles/Navbar.css'

const NavBar = () => {
  return (
    <>
        <nav style={{backgroundColor: '#0a192E'}}>
            <input id="nav-toggle" type="checkbox"/>
            <div style={{color: 'crimson'}} class="logo">Portfolio.<strong>TF</strong></div>
            <ul class="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Work</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <label for="nav-toggle" class="icon-burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </label>
        </nav >
    </>
  );
};

export default NavBar;
