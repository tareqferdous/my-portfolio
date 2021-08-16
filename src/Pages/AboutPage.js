import React from 'react';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../img/profile (1).png';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { motion } from "framer-motion";

const AboutPage = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
      useEffect(()=>{
        if(inView){
          animation.start({
              
            opacity:1,
            y:0,
            transition: {
             type: 'spring', duration: 1.5, delay:0.3, bounce: 0.3
            }
          });
        }
        if(!inView){
          animation.start({  y: 50, opacity: 0})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);

    return (
        <section className="skills pt-5 pb-5 about-wrapper" id="skills" style={{backgroundColor: '#121f35'}}>
        <div className="container about-info" id="about">
            <div className="row">
            <div ref={ref} className="max-width">
            <h2 className="text-center pb-5 page-title" style={{color: '#fff'}}>About Me</h2>
            <motion.div  className="skills-content" animate={animation}>
                <div className="text-white column left">
                    {/* <div><img className="img-fluid" style={{border: '2px solid #121f35', borderRadius:'10px', height: '180px', width:'180px'}} src={me} alt=""/></div> */}
                   <h3 style={{color:"orange", }}>Hi,</h3>
                    <h3 style={{color:"#1cc7c1",}}>Let's Introduce About Myself</h3>
                    {/* <p style={{ fontSize: '16px', paddingTop: '15px'}}>Name: Tareq Ferdous</p>
                    <p style={{ fontSize: '16px'}}>Email: tareqferdous10@gmail.com</p> */}
                    <p className="pt-2" style={{color:"#C0C0C0", fontSize: '16px', lineHeight: '1.6'}}> I am Tareq. I have completed my graduation in <strong>computer science and engineering</strong> from <strong>University of Asia Pacific</strong>. Along with my degree I have learnt javascript, react, node js and other various technologies. And for the last few months I have been developing web applications mostly using react and node js. I am equally interested in frontend and backend technologies and want to introduce myself as a MERN stack developer. I am enthusiastic to explore more about web development and advance my skills to work with a development company.</p>
                    <p style={{fontSize: '16px'}}><i class="far fa-envelope"></i> : tareqferdous10gmail.com</p>
                    <p style={{fontSize: '16px'}}><i class="fab fa-whatsapp"></i> : +8801521310310</p>
<div><button  style={{ fontSize: '16px', borderRadius:'5px', border: '2px solid crimson', background: 'crimson', padding: '5px 10px',}}><a href="https://drive.google.com/file/d/1mO0dgGERurp-qScF-C_UGCCGXO3iXCDq/view?usp=sharing" target="_blank" style={{textDecoration: 'none', color: 'white'}}>Download CV</a></button></div>

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
                        <h4 style={{color:'#F4D03F' }}>Skills</h4>
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>HTML5</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>90%</small>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>CSS3</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>60%</small>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>Bootstrap</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>90%</small>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>JavaScript</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>70%</small>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>React</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>80%</small>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>Node JS</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>50%</small>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>Express JS</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>60%</small>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>MongoDB</small>
                            <small style={{color: '#E8F8F5',fontSize:'14px'}}>70%</small>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                </div>
            </motion.div>
        </div>
            </div>
        </div>
    </section>
    );
};

export default AboutPage;