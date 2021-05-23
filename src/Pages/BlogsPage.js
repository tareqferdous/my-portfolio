import React from 'react';
import BlogDetails from '../Components/BlogDetails';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const BlogData = [
    {
        title: 'JavaScript tricky concepts',
        description: "Any number except 0 is true. If the value of any variable is 0 will return false..",
        pic: 'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        live: 'https://tarekferdos.medium.com/javascript-tricky-concepts-5cd473251497',
    },
    {
        title: 'Think in a react way',
        description: "Code splitting is a technique whose goal is to load the code in part by part..",
        pic: 'https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg',
        live: 'https://tarekferdos.medium.com/10-things-about-react-e6f55c0a5cd0',
    },
    {
        title: 'Modern JavaScript — ES6',
        description: "ES6 refers to version 6 of the ECMA Script programming language..",
        pic: 'https://www.mkwd.net/wp-content/uploads/2019/11/ES6.jpg',
        live: 'https://tarekferdos.medium.com/modern-javascript-es6-77837ca2bb30',
    }
]

const BlogsPage = () => {

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
      <section id="blogs" className="py-5" style={{backgroundColor: '#0a192f'}}>
      <h2 className="text-center text-white pb-5 page-title">My Recent Blogs</h2>
      <div class="container">
      <div class="row">
      <div class="card-deck" ref={ref}>
<motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
  <img src="https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-white">JavaScript tricky concepts</h5>
    <small class="card-text text-white">Any number except 0 is true. If the value of any variable is 0 will return false. Similarly, we get a falsy result when undefined, null, false is the return value. <a style={{fontSize: '16px'}} href="https://tarekferdos.medium.com/javascript-tricky-concepts-5cd473251497" target="_blank" rel="noopener noreferrer">Read More</a></small>
   
  </div>
  <div class="card-footer text-center">
  <small class="text-muted text-center">Last updated 3 weeks ago</small>
  </div>
</motion.div>
<motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
  <img src="https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-white">Think in a react way</h5>
    <small class="card-text text-white">Code splitting is a technique whose goal is to share and load the code in part by part. This means that, it will not run the whole application code together. <a style={{fontSize: '16px'}} href="https://tarekferdos.medium.com/10-things-about-react-e6f55c0a5cd0" target="_blank" rel="noopener noreferrer">Read More</a></small>
    
  </div>
  <div class="card-footer text-center">
  <small class="text-muted text-center">Last updated 3 weeks ago</small>
  </div>
</motion.div>
<motion.div class="card effect" style={{backgroundColor: 'rgb(23, 42, 69)'}} animate={animation}>
  <img src="https://www.mkwd.net/wp-content/uploads/2019/11/ES6.jpg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <h5 class="card-title text-white">Modern JavaScript — ES6</h5>
    <small class="card-text text-white">ES6 refers to version 6 of the ECMA Script programming language. ECMA Script is the standardized name for JavaScript, and version 6 is the next version after version 5 <a style={{fontSize: '16px'}} href="https://tarekferdos.medium.com/modern-javascript-es6-77837ca2bb30" target="_blank" rel="noopener noreferrer">Read More</a></small>
    
  </div>
  <div class="card-footer text-center">
  <small class="text-muted text-center">Last updated 3 weeks ago</small>
  </div>
</motion.div>
</div>
      </div>
    </div>
    </section>
    );
};

export default BlogsPage;