import React from 'react';
import emailjs from 'emailjs-com';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { motion } from "framer-motion";

const ContactPage = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
      useEffect(()=>{
        if(inView){
          animation.start({
            opacity: 1,
            
            // x: 0,
            transition: {
              type: 'spring', duration: 1, delay: 0.7, bounce: 0.3
            }
          });
        }
        if(!inView){
          animation.start({opacity: 0})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_z18klwv', e.target, 'user_MSVsPqs2b48PsqwJKW6TL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
      <section id="contact" className="contact py-5" style={{backgroundColor: '#121f35'}}>
        <div className="max-width container">
            <h2 className="page-title text-center text-white pb-5">Contact me</h2>
            <div className="contact-content row" ref={ref}>
                <motion.div className="column left col-md-6" animate={animation}>
                    <h4 className="text-white" >Get in Touch</h4>
                    <p className="text-muted" style={{width:'90%'}}>Email me with any questions or inquires. I would be happy to answer your questions and set up a meeting with you. </p>
                    
                    <div class="icon pl-3">
                    <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head text-muted">Name</div>
                                <div className="sub-title text-white">Tareq Ferdous</div>
                            </div>
                      </div>

                      <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head text-muted">Address</div>
                                <div className="sub-title text-white">Dhaka, Bangladesh</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head text-muted">Email</div>
                                <div className="sub-title text-white">tareqferdous10@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="column right col-md-6" animate={animation}>
                    <h4 className="text-white pb-2">Message me</h4>
                    <form className="contact-form" action="#" method="POST">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" placeholder="Name"/>
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" placeholder="Subject"/>
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg" type="submit" name="send">Send</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default ContactPage;