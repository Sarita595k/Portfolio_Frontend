import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="portfolio-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>SARITA</h3>
                    <p>Full Stack MERN Developer based in Bangalore.</p>
                </div>

                <div className="footer-links">
                    <a href="#about-section">About</a>
                    <a href="#projects-section">Projects</a>
                    <a href="#skills-section">Skills</a>
                    <a href="#contact-section">Contact</a>
                </div>

                <div className="footer-socials">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="mailto:sarita595k@gmail.com"><FaEnvelope /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p> &copy; {new Date().getFullYear()} Sarita. All rights reserved.</p>
                <button className="back-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            </div>

        </footer >
    );
};

export default Footer;