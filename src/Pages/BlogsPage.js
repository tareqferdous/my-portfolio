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
        <section className="py-5 portfolio-wrapper" style={{background:'#0a192f'}}>
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Recent Blogs</h2>
            </div>
            <div ref={ref} className="container">
                <motion.div className="row" animate={animation}>
                    {
                        BlogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                    }
                </motion.div>
            </div>
        </section>
    );
};

export default BlogsPage;