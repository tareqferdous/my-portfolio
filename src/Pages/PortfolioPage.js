import React from 'react';
import PortfolioDetails from '../Components/PortfolioDetails';
const portfolioData = [
    {
        title: 'Event Studio',
        description: "A Full-Stack event managing website where anyone can hire a photographer for any events.",
        pic: 'https://i.ibb.co/NprtNgK/12.png',
        live: 'https://event-studio-1b7c5.web.app/',
        github: 'https://github.com/tareqferdous/event-studio'
    },
    {
        title: 'Book Land',
        description: "Book Land is full stack website where anyone can visit and order there favorite book.",
        pic: 'https://i.ibb.co/9T30xWn/11.png',
        live: 'https://book-land-a6797.web.app/',
        github: 'https://github.com/tareqferdous/book-land-client'
    },
    {
        title: 'Sport Mob',
        description: "Sport Mob is a website where we can visualize some football team under a specific league",
        pic: 'https://i.ibb.co/L9r0hWG/14.png',
        live: 'https://hungry-bartik-132c55.netlify.app/',
        github: 'https://github.com/tareqferdous/sportMob'
    }
]


const PortfolioPage = () => {
    return (
        <section className="py-5 " style={{background:'#0a192f'}}>
            <div className="text-center pb-3">
            <h2 className=" pb-3" style={{color: '#1CC7C1'}}>My Recent Works</h2>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        portfolioData.map(details => <PortfolioDetails details={details}></PortfolioDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;