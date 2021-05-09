import React from 'react';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../img/me.jpg';

const AboutPage = () => {
    return (
        <section className="skills pt-5 pb-5 about-wrapper" id="skills" style={{backgroundColor: '#121f35'}}>
        <div className="container about-info">
            <div className="row">
            <div className="max-width">
            <h2 className="text-center pb-5" style={{color: '#fff'}}>About Me</h2>
            <div className="skills-content">
                <div className="text-white column left">
                    <div><img className="w-50 img-fluid" style={{border: '2px solid golden', borderRadius:'10px',}} src={me} alt=""/></div>
                   
                    {/* <h3 style={{color:" #1CC7C1", textAlign: 'center'}}>My creative skills & experiences.</h3> */}
                    <p style={{ fontSize: '16px', paddingTop: '15px'}}>Name: Tareq Ferdous</p>
                    <p style={{ fontSize: '16px'}}>Profile: Front-End Developer</p>
                    <p style={{ fontSize: '16px'}}>Email: tareqferdous10@gmail.com</p>
                    <p style={{color:"#C0C0C0", fontSize: '16px'}}>For the past 1 year, I've been developing applications for the web using mostly React and NodeJs. What I do as every day there is something new and exciting to learn
I graduated from University of Asia Pacific where I studied web development in a course named Software Engineering. While I was at university I worked part time for some individual that helped me to grow as a developer.</p>
<div><button style={{ borderRadius:'5px'}} className="btn-primary"><a href="https://drive.google.com/file/d/1M6NC19yP75xMQ7O7FYQ1l-mGANzY-Cfa/view?usp=sharing" class="btn btn-primary" target="_blank">Download CV</a></button></div>
{/* 
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
                        </div> */}
                    
                </div>
                <div className="column right">
                    <div className="bars">
                        <h4 style={{color:'#ff4a57' }}>Skills</h4>
                        <div className="info">
                            <span>HTML5</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS3</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Bootstrap</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>80%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Node JS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MongoDB</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    </section>
    );
};

export default AboutPage;