import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "© 2021 Tareq Ferdous. All rights reserved."},
        {name: "Designed by Tareq Ferdous"},
        
    ]
    const ourAddress = [
        {name: "Dhanmondi - 4A, Dhaka" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Web Development" , link: "/emergency"},
        {name: "Web Designing" , link: "/checkup"},
        {name: "Responsive Web Application" , link: "/personal-treatment"},
    ]
    return (
        <footer className="footer-area">
            <div className="container">
                <div class="row py-3">
                <FooterCol key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle=" Address" menuItems={ourAddress}> 
                        <ul className="social-media">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                       
                    </FooterCol> 
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;