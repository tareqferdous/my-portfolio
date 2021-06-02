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
            
            x: 0,
            transition: {
              type: 'spring', duration: 1
            }
          });
        }
        if(!inView){
          animation.start({opacity: 0, x: -100})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_zcm47ct', 'template_z18klwv', e.target, 'user_MSVsPqs2b48PsqwJKW6TL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
      <section id="contact" className="contact py-5" style={{background: 'LightGrey'}}>
        <div className="max-width container">
            <h2 className="page-title text-center pb-5" style={{color: 'black', fontWeight: 600}}>Contact me</h2>
            <div className="contact-content row" ref={ref}>
                <motion.div className="column left col-md-6" animate={animation}>
                    <h4 className=""style={{color: '#143B80', fontWeight: 600}} >Get in Touch</h4>
                    <p className="" style={{width:'90%', fontSize: '16px', color: '#1a0000', fontWeight: 500}}>Email me with any questions or inquires. I would be happy to answer your questions and set up a meeting with you. </p>
                    
                    <div class="icon pl-3">
                    <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head " style={{color:'#1a0000', fontWeight: 500}}>Name</div>
                                <div className="sub-title">Tareq Ferdous</div>
                            </div>
                      </div>

                      <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head " style={{color:'#1a0000', fontWeight: 500}}>Address</div>
                                <div className="sub-title">Dhaka, Bangladesh</div>
                            </div>
                        </div>

                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head " style={{color:'#1a0000', fontWeight: 500}}>Email</div>
                                <div className="sub-title">tareqferdous10@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="column right col-md-6" animate={animation}>
                    <h4 className=" pb-2" style={{color: '#143B80', fontWeight: 600}}>Message me</h4>
                    <form onSubmit={sendEmail} className="contact-form">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" placeholder="Name" name="name"/>
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" placeholder="Email" name="email"/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" placeholder="Subject" name="subject" />
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" placeholder="Message.." name="message" ></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg" type="submit" name="send">Send <i class="fas fa-arrow-right" style={{fontSize: '14px'}}></i></button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default ContactPage;