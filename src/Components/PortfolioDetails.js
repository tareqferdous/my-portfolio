import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

const PortfolioDetails = ({details}) => {
    return (
        
        <div className="col-md-4 pt-3 effect portfolio-info">
        <img className="img-fluid pb-3 " src={details.pic} alt=""/>
        <h4 style={{color: '#fff'}} className="text-center pb-2">{details.title}</h4>
        <p className="text-center text-secondary" style={{color: '#F8F8FF', fontSize: '16px'}}>{details.description}</p>
        <div class="card-footer" style={{background: '#121f35'}}>
        <div className=""><small style={{ borderRadius:'5px', textAlign: 'left', fontSize: '20px', textDecoration: 'none'}}><a style={{textDecoration: 'none'}} href={details.live}  target="_blank">Live</a></small>  <small style={{ borderRadius:'5px', marginLeft: '200px', fontSize: '20px'}} ><a style={{textDecoration: 'none'}} href={details.github}  target="_blank">GitHub</a></small></div>
        </div>
        
        
    </div>
  
    );
};

export default PortfolioDetails;