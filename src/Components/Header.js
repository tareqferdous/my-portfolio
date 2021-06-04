import React from 'react';
import Typed from 'react-typed';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import "../styles/contact.css";



const Header = () => {

    return (
        <>

<div className="header-wrapper">
            <motion.div class="main-info text-center"
            // initial={{x: '-100vw'}}
            // animate={{x: 0}}
            initial={{opacity: 0, x: 100, y:50}}
            animate={{opacity: 1, x:0, y: 0}}
            transition={{ duration: 1}}
            >
                <h1 className="pb-2 main-text" >Hello, I'M <span style={{color: 'orange'}}>TAREQ FERDOUS</span></h1>
                <Typed 
                    className="typed-text"
                    strings={["Front-End Web Developer", "MERN Stack Developer", "Engineer"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />

                {/* <p className="text-white pt-3 header-text">A passionate and diligent web developer with a productive idea of problem-solving knows some languages and frameworks for frontend and backend.</p> */}
                
                {/* <p className="" style={{color: "white", fontSize:"18px", width: '65%', textAlign:"center", paddingTop: '20px'}}>I count myself as a hardworking person. To pursue a challenging career in a
                competitive world where enthusiasm, honesty, hard work and passion will support me to
                grow myself as well as utilize my knowledge and expertise for
                professional development in the relevant field.</p> */}


            {/* <div className="text-center pt-2"><button style={{ borderRadius:'5px',cursor: 'pointer'}} className="btn-primary"><a href="https://drive.google.com/file/d/1M6NC19yP75xMQ7O7FYQ1l-mGANzY-Cfa/view?usp=sharing" class="btn btn-primary" target="_blank">Download CV</a></button></div> */}

                <div className="icons pb-5">
                                <a className="icon-holder">
                                    <a href="https://www.linkedin.com/in/tareq-ferdous-298178211/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="icon yt"/></a>
                                </a>
                                <a  className="icon-holder">
                                    <a href="https://github.com/tareqferdous" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icon gh" /></a>                           
                                </a>
                                <a  className="icon-holder">
                                    <a href="https://www.instagram.com/tareqferdous/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon fb" /></a>             
                                </a>
                                <a className="icon-holder">
                                    <a href="https://www.linkedin.com/in/tareq-ferdous-298178211/" target='_blank'><FontAwesomeIcon icon={faFacebook} className="icon yt"/></a>
                                </a>
                                                              
                </div>

                <div class="arrow">
                    <small></small>
                    <small></small>
                  
                </div>

                       
            </motion.div>
            <a class="gotobtn" href="#"><i class="fas fa-arrow-circle-up"></i></a>
        </div>

        </>
    );
};

export default Header;