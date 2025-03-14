import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import hero from '../assets/hero.png'; 
import Logo from '../assets/logo.png';
import backgroundVideo from '../assets/background.mp4';

function Home() {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="home-container">

            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.nav 
                className="navbar transparent-navbar" 
                initial={{ y: -50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0, 0, 0, 0.5)', zIndex: 100 }}
            >
                <motion.img 
                    src={Logo} 
                    alt="Logo" 
                    className="logo" 
                    whileHover={{ scale: 1.1 }}
                /> 
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/grievance">Grievance</Link>
                </div>   
            </motion.nav>
            
            <motion.div 
                className="hero-section" 
                id="home"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', top: '30%', right: '10%', textAlign: 'right' }}
            >
                <motion.h1 
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    Hi, I'm Stormfury!
                </motion.h1>
                <motion.p 
                    initial={{ x: 100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.5 }}
                >
                    I am the wind that sweeps away your sorrow. 🌬️✨
                </motion.p>
                <motion.img 
                    src={hero} 
                    alt="Superhero" 
                    className="hero-image" 
                    whileHover={{ scale: 1.05 }}
                    style={{ position: 'relative', right: '-10%', top: '-20px' }}
                /> 
            </motion.div>
        </motion.div>
    );
}

export default Home;