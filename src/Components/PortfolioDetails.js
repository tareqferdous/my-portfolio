import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

const PortfolioDetails = ({details}) => {
    return (
        
        <div className="col-md-4 pt-3 effect">
        <img className="img-fluid pb-3" src={details.pic} alt=""/>
        <h4 style={{color: '#fff'}} className="text-center pb-2">{details.title}</h4>
        <p className="text-center text-secondary" style={{color: '#F8F8FF'}}>{details.description}</p>
        
        <div className="text-center"><small style={{ borderRadius:'5px'}} className="btn-primary"><a href={details.live} class="btn btn-primary" target="_blank">Live</a></small>  <small style={{ borderRadius:'5px'}} className="btn-primary"><a href={details.github} class="btn btn-primary" target="_blank">GitHub</a></small></div>
    </div>
  
    );
};

export default PortfolioDetails;