import React from "react";
import { motion } from "framer-motion";
import {} from '@fortawesome/free-brands-svg-icons';
import {faCode, faLaptop, faMobile} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const Services = () => {
  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(()=>{
    if(inView){
      animation.start({
        x: 0,
        opacity:1,
        transition: {
          type: 'spring', duration: 1, delay: 0.2
        }
      });
    }
    if(!inView){
      animation.start({x: -100,opacity: 0})
    }

    console.log("use effect hook, inView = ", inView);
  }, [inView]);

  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting\
    industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FontAwesomeIcon style={{fontSize: '40px'}} icon={faCode} className="icon fb" />,
      heading: "Web Development",
      text:
        "I will provide web development service. if you need please contact with me",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon style={{fontSize: '40px'}} icon={faMobile} className="icon fb" />,
      heading: "Web Design",
      text:
        "I can do any kind of website design like Ecommerce, landing page, portfolio etc ",
    },
    {
      id: 3,
      icon: <FontAwesomeIcon style={{fontSize: '40px'}} icon={faLaptop} className="icon fb" />,
      heading: "Fully Responsive",
      text:
        "I will provide fully responsive website with mobile phone, tablet, desktop etc",
    }
  ]);
  return (
    <div className="services">
      <div className="container">
        <div ref={ref} className="services__header">
          <div className="common" animate={animation}>
            {/* <h3  className="heading">{header.mainHeader}</h3> */}
            <h1  className="mainHeader">{header.subHeading}</h1>
            {/* <p className="mainContent">{header.text}</p> */}
            <div className="commonBorder"></div>
          </div>

          <div class="container">
          <div className="row bgMain">
            {state.map((info) => (
              <motion.div className="col-md-4 bgMain"
              animate={animation}
              >
                <div className="services__box text-center">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
