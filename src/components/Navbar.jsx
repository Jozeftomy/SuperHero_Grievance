import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiChevronLeft } from 'react-icons/fi';
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

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay Background */}
            <motion.div 
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            <motion.div 
              className="mobile-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              {/* Drawer Header with Back Button */}
              <div className="drawer-header">
                <FiChevronLeft size={24} color="white" onClick={toggleDrawer} />
                <span>Menu</span>
              </div>

              {/* Navigation Links */}
              <div className="nav-links vertical-menu">
                <Link to="/" onClick={toggleDrawer}>Home</Link>
                <Link to="/about" onClick={toggleDrawer}>About Us</Link>
                <Link to="/grievance" onClick={toggleDrawer}>Grievance</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/grievance">Grievance</Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
