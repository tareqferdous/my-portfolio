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
        <div className="contact">
        <div ref={ref} className="container contact-content">
            <h2 className="pb-4" style={{color:'lightSalmon', textAlign: 'center'}}>Contact Me</h2>
        <motion.div  animate={animation} className="row mb-3">
            <div className="col-md-4 offset-md-1 mt-5">
                <h3>Let us handle your work, professionally.</h3>
                <p>I strive to maintain accuracy and consistency in task completion, individual performance and
team goal achievement.My ability to
produce excellent code and to clearly communicate and collaborate with coworker’s, client and
management have led to company success.</p>
            </div>
            <div className="col-md-6 offset-md-1">
                <form onSubmit={sendEmail} action="">
                    <input type="text" name="name" className="form-control" placeholder="Name" id=""/>
                    <input type="email" name="email" className="form-control my-4" placeholder="Email" id=""/>
                    <textarea id="message" name="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </motion.div>
        <div className=" text-black" style={{textAlign:'right', paddingRight: '270px'}}>
            <small>Sending to: tarekferdos10@gmail.com</small>
        </div>
        </div>
    </div>
    );
};

export default ContactPage;