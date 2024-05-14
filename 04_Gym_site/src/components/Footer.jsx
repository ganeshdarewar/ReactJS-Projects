import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="footer logo" />
                    </Link>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus animi autem quasi eligendi eius id quod corporis laborum, numquam neque.</p>
                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/ganeshdarewar/" target='_blank' ><FaLinkedin /></a>
                        <a href="https://www.facebook.com/" target='_blank' ><FaFacebook /></a>
                        <a href="https://twitter.com/home" target='_blank' ><FaTwitter /></a>
                        <a href="https://www.instagram.com/" target='_blank' ><FaInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2024 Ganesh Darewar &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
