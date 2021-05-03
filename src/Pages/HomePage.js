import React from 'react';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import profile from '../img/me.jpg'
import AboutPage from './AboutPage';

function HomePage() {
    return (
        <div style={{paddingTop: "7rem", margin: '0 auto', backgroundColor: '#0a192f', zIndex:""}} className="homePage">
           <div class="container">
           <div class="row">
                <div class="col-md-6">
                    <header className="hero">
                        <h1 className="hero-text text-center">
                            Hi, I am 
                            <span className="text-center"> Tareq Ferdous</span>
                        </h1>
                        <h4 className="text-center">
                            <span>Front-End Developer</span>
                        </h4>
                        <p className="h-sub-text" style={{color: "honeydew"}}>
                        I strive to maintain accuracy and consistency in task completion, individual performance and team goal achievement. In my professional career, I have developed web-based applications using HTML5, CSS3, Bootstrap, JavaScript, React, Node.js, Express.js, MongoDB. My ability to produce excellent code and to clearly communicate and collaborate with coworker’s, client and management have led to company success.
                        </p>
                        <div className="text-center"><button style={{ borderRadius:'5px'}} className="btn-primary"><a href="https://drive.google.com/file/d/1BXKp88XxI494mWKBXQ4-lhlxXat0JCaa/view?usp=sharing" class="btn btn-primary" target="_blank">Download CV</a></button></div>
                        <div className="icons">
                            <a className="icon-holder">
                                <a href="https://www.instagram.com/tareqferdous/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon fb" /></a>             
                            </a>
                            <a  className="icon-holder">
                                <a href="https://github.com/tareqferdous" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon gh" /></a>                           
                            </a>
                            <a className="icon-holder">
                                <a href="https://www.linkedin.com/in/tareq-ferdous-298178211/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="icon yt"/></a>
                            </a>
                        </div>
                    </header>
                </div>
                <div class="col-md-6 text-center">
                    <img className="img-fluid w-75" style={{borderRadius: '15px', border: '2px solid white'}} src={profile} alt=""/>
                </div>
           </div>
           </div>
           
        </div>
    )
}

export default HomePage;
