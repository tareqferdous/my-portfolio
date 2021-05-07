import React from 'react';
import BlogDetails from '../Components/BlogDetails';
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
    return (
        <section className="py-5 portfolio-wrapper" style={{background:'#0a192f'}}>
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>Recent Blogs</h2>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        BlogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;