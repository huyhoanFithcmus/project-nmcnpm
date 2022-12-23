import React from 'react';
import '../core/css/Footer.css'; // import CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="#" className="footer-link">
                    Univerity of Science
                </a>
            </div>
            <p className="footer-address">227 Nguyễn Văn Cừ, District 5, Ho Chi Minh city</p>
            <div className="footer-bottom">
                <div className="footer-social-icons">
                    <a href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="footer-copyright">
                    Copyright &copy; {new Date().getFullYear()} Group 9
                </div>
            </div>
        </footer>

    );
};

export default Footer;
