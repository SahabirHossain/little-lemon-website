import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <img src={Logo} alt="Little Lemon logo" />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Dhaka</li>
                                <li>Barisal</li>
                                <li>Chittagong</li>
                                <li>Sylhet</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Mon - Thu: 10:30AM - 10:00PM</li>
                                <li>Fri - Sat: 12:00PM - 12:00AM</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>1206 Abdul Road - Dhaka</li>
                                <li>Tel: 013 7928 0678</li>
                                <li>Email: info@littlelemon.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© {new Date().getUTCFullYear()} Little Lemon Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
