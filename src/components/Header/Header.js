import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/dashboard" className="profile-section">
          <img src="https://i.pinimg.com/736x/f0/4b/c7/f04bc7f4b16a2fc94078139ad03e6f88.jpg" alt="Profile" className="profile-image" /> 
          <span className="profile-name">Harsha Lekamge</span>
        </Link>
        <div className="logo">CardApp</div>
      </div>
      
      <nav className="nav-links">
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="/">View</Link></li>
          <li><Link to="/userview">Tips</Link></li>
          <li><Link to="/news">News</Link></li>  
          <li><Link to="/articles">Articles</Link></li>  
          <li><Link to="/events">Events</Link></li>  
          <li><Link to="/gallery">Gallery</Link></li>  
          <li><Link to="/about">Community Forum</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search ..." />
      </div>
    </header>
  );
};

export default Header;
