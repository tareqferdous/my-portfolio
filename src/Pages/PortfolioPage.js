import React from 'react';
import PortfolioDetails from '../Components/PortfolioDetails';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const portfolioData = [
    {
        title: 'Event Studio',
        description: "A Full-Stack event managing website where anyone can hire a photographer for any events.",
        pic: 'https://i.ibb.co/NprtNgK/12.png',
        live: 'https://event-studio-1b7c5.web.app/',
        github: 'https://github.com/tareqferdous/event-studio'
    },
    {
        title: 'Book Land',
        description: "Book Land is full stack website where anyone can visit and order there favorite book.",
        pic: 'https://i.ibb.co/9T30xWn/11.png',
        live: 'https://book-land-a6797.web.app/',
        github: 'https://github.com/tareqferdous/book-land-client'
    },
    {
        title: 'Sport Mob',
        description: "Sport Mob is a website where we can visualize some football team under a specific league",
        pic: 'https://i.ibb.co/L9r0hWG/14.png',
        live: 'https://hungry-bartik-132c55.netlify.app/',
        github: 'https://github.com/tareqferdous/sportMob'
    }
]


const PortfolioPage = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
      useEffect(()=>{
        if(inView){
          animation.start({
            y: 10,
            transition: {
              type: 'spring', duration: 1.5, delay: 0.2, bounce: 0.3
            }
          });
        }
        if(!inView){
          animation.start({y: 50})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);

    return (
        <section className="py-5 portfolio-wrapper" style={{background:'#0a192f'}}>
            <div className="text-center pb-3 ">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>My Recent Works</h2>
            </div>
            <div ref={ref} className="container d-flex justify-content-center">
                <motion.div className="row " animate={animation}>
                    {
                        portfolioData.map(details => <PortfolioDetails details={details} ></PortfolioDetails>)
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioPage;