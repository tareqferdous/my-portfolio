import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BlogDetails = ({blog}) => {
    return (

        // <div className=" mx-auto">        
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-4">
        //             <Card className="card" style={{ width: '20rem'}}>
        //             <Card.Img className="img-fluid" variant="top" src={blog.pic}/>
        //             <Card.Body style={{background: 'rgb(14, 14, 54)', border: '1px solid black'}}>
        //                 <div className="text-center">
        //                 <Card.Title>{blog.title}</Card.Title>
        //                 <Card.Text>{blog.description}</Card.Text>
        //                 <Button variant="primary">View Details</Button> 
        //                 </div>
        //             </Card.Body>
        //             </Card>
        //             </div>
        //         </div>
        //     </div>
        // </div>
       
        <div className="col-md-4 pt-3 effect portfolio-info mx-auto">
        <img className="img-fluid pb-3" src={blog.pic} alt=""/>
        <h4 style={{color: '#fff'}} className="text-center pb-2">{blog.title}</h4>
        <p className="text-center text-secondary" style={{color: '#F8F8FF'}}>{blog.description}</p>
        
        <div className="text-center"><small style={{ borderRadius:'5px'}} className="btn-primary"><a href={blog.live} class="btn btn-primary" target="_blank">Read More</a></small> </div>
    </div>
    );
};

export default BlogDetails;