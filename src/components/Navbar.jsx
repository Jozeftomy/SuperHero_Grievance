import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar transparent-navbar" 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100
      }}
    >
      {isMobile ? (
        <FiMenu className="menu-toggle" size={24} color="white" onClick={toggleDrawer} />
      ) : (
        <motion.img 
          src={require('../assets/logo.png')} 
          alt="Logo" 
          className="logo" 
          whileHover={{ scale: 1.1 }}
        />
      )}
      
      <div className={`nav-links ${isMobile && !isOpen ? 'hidden' : ''}`}>
        <Link to="/" onClick={toggleDrawer}>Home</Link>
        <Link to="/about" onClick={toggleDrawer}>About Us</Link>
        <Link to="/grievance" onClick={toggleDrawer}>Grievance</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
