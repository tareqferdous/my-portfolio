import React from 'react';
import PortfolioDetails from '../Components/PortfolioDetails';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const portfolioData = [
    {
        title: 'Event Studio',
        description: "A Full-Stack event managing website where anyone can hire a photographer",
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
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 1.5, delay: 0.2
            }
          });
        }
        if(!inView){
          animation.start({x: -100, opacity: 0})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);

    return (
      <section ref={ref} id="portfolio" className="py-5" style={{backgroundColor: '#0a192f'}}>
        <motion.h2 className="text-center text-white pb-5 page-title" >My Recent Works</motion.h2>
        <div class="container">
       
        <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4" >
    <motion.div class="card h-100" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
      <img src="https://i.ibb.co/NprtNgK/12.png" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title text-white">Event Studio</h5>
      <small class="card-text text-white">A Full-Stack event managing website where anyone can hire a photographer for any events.</small>
      <div class="d-flex justify-content-between">
        <div class="technology pt-2">
          <small>React.js</small>
          <small>Node.js</small>
          <small>Express.js</small>
          <small>MongoDB</small>
          <small>Stripe.js</small>
          <small>Firebase</small>
          <small>Bootstrap5</small>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <ul className="list-inline m-0 p-0">
      <a className="mr-3" href="https://github.com/tareqferdous/event-studio" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{fontSize: '20px', color: '#6ACECE'}}/></a> <a className="mr-3" href="https://event-studio-1b7c5.web.app/" target="_blank" rel="noopener noreferrer"><i style={{fontSize: '20px', color: '#6ACECE'}} class="fas fa-external-link-alt"></i></a>
      </ul>
    </div>
      </motion.div>
    </div>
  <div class="col mb-4">
    <motion.div class="card h-100" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
      <img src="https://i.ibb.co/9T30xWn/11.png" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title text-white">Event Studio</h5>
      <small class="card-text text-white">A Full-Stack event managing website where anyone can hire a photographer for any events.</small>
      <div class="d-flex justify-content-between">
        <div class="technology pt-2">
          <small>React.js</small>
          <small>Node.js</small>
          <small>Express.js</small>
          <small>MongoDB</small>
          <small>Stripe.js</small>
          <small>Firebase</small>
          <small>Bootstrap5</small>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <ul className="list-inline m-0 p-0">
      <a className="mr-3" href="https://github.com/tareqferdous/event-studio" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{fontSize: '20px', color: '#6ACECE'}}/></a> <a className="mr-3" href="https://event-studio-1b7c5.web.app/" target="_blank" rel="noopener noreferrer"><i style={{fontSize: '20px', color: '#6ACECE'}} class="fas fa-external-link-alt"></i></a>
      </ul>
    </div>   
      </motion.div>
    </div>
 
  <div class="col mb-4">
    <motion.div class="card h-100" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
      <img src="https://i.ibb.co/L9r0hWG/14.png" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title text-white">Sport Mob</h5>
      <small class="card-text text-white">Sport Mob build with react that visualize some football team under a specific league.</small>
      <div class="d-flex justify-content-between">
        <div class="technology pt-2">
          <small >JavaScript</small>
          <small>React.js</small>
          <small>Rest Api</small>
          <small>ES6</small>
          <small> React Bootstrap</small>
        </div>
      </div>
    </div>
    <div class="card-footer">
    <ul className="list-inline m-0 p-0">
      <a className="mr-3" href="https://github.com/tareqferdous/sportMob" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{fontSize: '20px', color: '#6ACECE'}}/></a> <a className="mr-3" href="https://hungry-bartik-132c55.netlify.app/" target="_blank" rel="noopener noreferrer"><i style={{fontSize: '20px', color: '#6ACECE'}} class="fas fa-external-link-alt"></i></a>
      </ul>
    </div>
      </motion.div>
  </div>
 
</div>
        
</div>
      </section>
    );
};

export default PortfolioPage;