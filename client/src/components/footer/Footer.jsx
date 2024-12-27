import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p><strong>Dr. Krishna Chavan, MD</strong></p>
                    <p>Bhoripgao Road Shri Nagar Basmath, Maharashtra </p>
                    <p><strong>Phone:</strong> (+91) 8412839460 </p>
                    <p><strong>Email:</strong> krishnachavan@gmail.com</p>
                </div>

                <div className="footer-section">
                    <h4>Office Hours</h4>
                    <p><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/appointments">Book Appointment</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-border'></div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dr. Krishna Chavan All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
