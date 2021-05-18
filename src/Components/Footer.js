import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Web Development" , link: "/emergency"},
        {name: "Web Designing" , link: "/checkup"},
        {name: "Responsive Web Application" , link: "/personal-treatment"},
        {name: "Psd to HTML" , link: "/tooth-extract"},
        {name: "Basic Photoshop" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Dhanmondi - 4A, Dhaka" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Web Development" , link: "/emergency"},
        {name: "Web Designing" , link: "/checkup"},
        {name: "Responsive Web Application" , link: "/personal-treatment"},
        {name: "Psd to HTML" , link: "/tooth-extract"},
        {name: "Basic Photoshop" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area">
            <div className="container py-3">
                    <p className="text-center text-white pt-3 ">© 2021 Tareq Ferdous. All Rights Reserved</p>
                    {/* <FooterCol key={1} menuTitle={"Discover Us"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="pb-3">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-primary">+8801303109612</button>
                        </div>
                    </FooterCol> */}
            </div>
        </footer>
        
    );
};

export default Footer;