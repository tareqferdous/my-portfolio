import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

const PortfolioDetails = ({details}) => {
    return (      
        <div class="card-deck">
            <div class="card">
                <img src={details.pic} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{details.title}</h5>
                <p class="card-text">{details.description}</p>
                </div>
                <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetails;