import React from 'react';
import BlogDetails from '../Components/BlogDetails';
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const BlogData = [
    {
        title: 'JavaScript',
        description: "How it feels to learn JavaScript in 2021",
        pic: 'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg',
        live: 'https://medium.com/hackernoon/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f',
    },
    {
        title: 'React',
        description: "The most important lessons working with React",
        pic: 'https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg',
        live: 'https://medium.com/free-code-camp/mindset-lessons-from-a-year-with-react-1de862421981',
    },
    {
        title: 'Node JS',
        description: "The definitive Node.js handbook",
        pic: 'https://miro.medium.com/max/1838/1*xdo0UBpyszvD7-7EH4TkIA.png',
        live: 'https://medium.com/free-code-camp/the-definitive-node-js-handbook-6912378afc6e',
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
            x: 0,
            transition: {
              type: 'spring', duration: 1.5, delay: 0.2, bounce: 0.3
            }
          });
        }
        if(!inView){
          animation.start({x: '-100vw'})
        }
    
        console.log("use effect hook, inView = ", inView);
      }, [inView]);

    return (
        <section className="py-5 portfolio-wrapper" style={{background:'#0a192f'}}>
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Recent Blogs</h2>
            </div>
            <div ref={ref} className="container d-flex justify-content-center">
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