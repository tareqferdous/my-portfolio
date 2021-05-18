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
      <section className="contact py-5">
      <div className="container">
          <div className="section-header text-center text-white mb-5">
               <h2>Contact me</h2>
          </div>
         <div class="row">
         <div className="col-md-5 mt-5 ">
                <h3>Get in touch with</h3>
                <div className="pt-3 pb-3">
                  <h6 className="text-white">Phone</h6>
                  <button className="btn btn-primary">+8801303109612</button>
                </div>
                <div className="pt-3 pb-3">
                  <h6 className="text-white">Email</h6>
                  <button className="btn btn-primary">tareqferdous10@gmail.com</button>
                </div>
            </div>
          <div className="col-md-7">
              <form action="">
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email Address *"/>
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" placeholder="Subject *"/>
                  </div>
                  <div className="form-group">
                      <textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message *"></textarea>
                  </div>
                  <div className="form-group ">
                      <button type="button" className="btn btn-primary"> Send </button>
                  </div>
              </form>
          </div>
         </div>
      </div>
  </section>
    );
};

export default ContactPage;