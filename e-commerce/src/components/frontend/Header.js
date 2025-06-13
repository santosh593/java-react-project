import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
     <header className="navbar">
            <div className="container">
                <div className="logo">
                    Ecom
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Single Post</a></li>
                        <li className="dropdown">
                            <a href="#">Categories <FontAwesomeIcon icon={faChevronDown} /></a>
                            {/* You can add a dropdown content here if needed */}
                            {/*
                            <div className="dropdown-content">
                                <a href="#">Category 1</a>
                                <a href="#">Category 2</a>
                            </div>
                            */}
                        </li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        </header>
  )
}

export default Header
