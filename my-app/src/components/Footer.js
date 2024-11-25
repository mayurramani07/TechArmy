import React from "react";
import './Footer.css'; 

const Footer = () => {
    return (
        <footer>
            <div className="Footer">
                <div className="Footer-content">
                    <div className="Footer-column">
                        <h4>Rentlar</h4>
                        <p>
                            Our team of seasoned professionals is committed to<br />
                            providing you with exceptional service, in-depth market<br />
                            knowledge, and personalized solutions tailored to your<br />
                            unique needs.
                        </p>

                    <div className="Footer-column">
                        <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com/i/flow/login"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.airbnb.co.in/india/stays"><i className="fa-brands fa-airbnb"></i></a>
                        </div>
                    </div>

                    <div className="CompanyInfo">
                        <h4>Company Info</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="Resources">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Conditions</a></li>
                            <li><a href="#">Policy</a></li>
                        </ul>
                    </div>

                    <div className="Contact">
                        <h4>Contact</h4>
                        <ul>
                            <li>+91 1234567890</li>
                            <li>rentlar07@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
