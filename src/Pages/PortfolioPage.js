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
            y: 10,
            transition: {
              type: 'spring', duration: 1.5, delay: 0.2, bounce: 0.3
            }
          });
        }
        if(!inView){
          animation.start({y: 100})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);

    return (
      <section id="portfolio" className="py-5" style={{backgroundColor: '#0a192f'}}>
        <h2 className="text-center text-white pb-5 page-title">My Recent Works</h2>
        <div class="container">
        <div class="row">
        <div class="card-deck" ref={ref}>
  <motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
    <img src="https://i.ibb.co/NprtNgK/12.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-white">Event Studio</h5>
      <small class="card-text text-white">A Full-Stack event managing website where anyone can hire a photographer for any events. Client can review or rate our services. Client can pay online using credit card and enjoy service</small>
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
  <motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
    <img src="https://i.ibb.co/9T30xWn/11.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-white">Book Land</h5>
      <small class="card-text text-white">Book Land is full stack website where anyone can visit and order there favorite book. Customers can view their ordered books. Admin can add or delete any services</small>
      <div class="d-flex justify-content-between">
        <div class="technology pt-2">
          <small>React.js</small>
          <small>Node.js</small>
          <small>Express.js</small>
          <small>MongoDB</small>
          <small>Firebase</small>
          <small>Bootstrap5</small>
        </div>
      </div>
    </div>
    <div class="card-footer">
    <ul className="list-inline m-0 p-0">
      <a className="mr-3" href="https://github.com/tareqferdous/book-land-client" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" style={{fontSize: '20px', color: '#6ACECE'}}/></a> <a className="mr-3" href="https://book-land-a6797.web.app/" target="_blank" rel="noopener noreferrer"><i style={{fontSize: '20px', color: '#6ACECE'}} class="fas fa-external-link-alt"></i></a>
      </ul>
    </div>
  </motion.div>
  <motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
    <img src="https://i.ibb.co/L9r0hWG/14.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-white">Sport Mob</h5>
      <small class="card-text text-white">Sport Mob is a website build with react where we can visualize some football team under a specific league. To select a specific team, we can see more about the team and Social medias</small>
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