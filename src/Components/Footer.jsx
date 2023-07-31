import React from 'react';

import "../CSS/footer.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>About Us</h2>
                    <h5>
                    our mission is to enrich lives through unforgettable travel experiences, 
                    providing access to exciting and luxurious destinations at affordable prices.
                    </h5>
                </div>

                <div className="footer-section">
                    <h2>Contact</h2>
                    <h5>Email: ajaynishad4123@gmail.com</h5>
                    <h5>Phone: +1 123-456-7890</h5>
                    <h5>Address: localhost:3000, India</h5>
                </div>

                <div className="footer-section">
                    <h2>Help</h2>
                    <h5>Support</h5>
                    <h5>Troubleshooting</h5>
                    <h5>Contact us</h5>
                </div>

                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://github.com/ajay-nishad25">
                            <GitHubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/ajay-nishad25">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/ajay-nishad25">
                           <YouTubeIcon/>
                        </a>
                        <a href="https://github.com/ajay-nishad25">
                           <TwitterIcon/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <h5>Happy coding 👩🏻‍💻 </h5>
            </div>
        </footer>
    );
};

export default Footer;
