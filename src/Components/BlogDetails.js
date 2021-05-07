import React from 'react';

const BlogDetails = ({blog}) => {
    return (
       
        <div className="col-md-4 pt-3 effect portfolio-info">
        <img className="img-fluid pb-3" src={blog.pic} alt=""/>
        <h4 style={{color: '#fff'}} className="text-center pb-2">{blog.title}</h4>
        <p className="text-center text-secondary" style={{color: '#F8F8FF'}}>{blog.description}</p>
        
        <div className="text-center"><small style={{ borderRadius:'5px'}} className="btn-primary"><a href={blog.live} class="btn btn-primary" target="_blank">Read More</a></small> </div>
    </div>
    );
};

export default BlogDetails;