import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BlogDetails = ({blog}) => {
    return (
       
            <div className="col-md-4 effect pt-3  portfolio-info mx-auto">
            <img className="img-fluid pb-3 " src={blog.pic} alt=""/>
            <h4 style={{color: '#fff'}} className="text-center pb-2">{blog.title}</h4>
            <p className="text-center text-secondary" style={{color: '#F8F8FF', fontSize: '16px'}}>{blog.description} <a href={blog.live} style={{color: 'royalblue', textDecoration: 'none', fontSize: '18px'}} target="_blank">Read More</a></p>
                <div class="card-footer bg-dark text-center">
                <small class="text-muted">Last updated 1 week ago</small>
                </div>
            </div>
    );
};

export default BlogDetails;