import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import stormImage from '../assets/storm.png';
import lightningGif from '../assets/lightning.gif';

const About = () => {
    return (
        <motion.div 
            className="about-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background Storm Animation */}
            <motion.img 
                src={lightningGif} 
                alt="Storm Background" 
                className="storm-background" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            />

            <motion.div className="story-content">
                <motion.h1 
                    initial={{ y: -50, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 1 }}
                >
                    The Legend of Stormfury
                </motion.h1>
                
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    In the heart of the darkest storm, where the wind howled with untamed fury and lightning carved scars into the heavens, a legend was born. Once an ordinary man, Elias Grayson had always felt a strange connection to the storm—an unseen force whispering his name, calling him toward his destiny.
                </motion.p>
                
                <motion.img 
                    src={stormImage} 
                    alt="Stormfury" 
                    className="storm-image" 
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                />
                
                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    On the fateful night when the skies split apart and the tempest raged like never before, Elias found himself at the center of nature’s wrath. Struck by a bolt of raw energy, he should have perished. But fate had other plans. Instead of death, he was reborn, his veins coursing with the power of the storm itself. From that moment, he was no longer just a man—he became Stormfury, the tempest incarnate.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    For years, he soared through the skies, a phantom in the wind. He wielded lightning like a blade, his presence a whisper on the breeze, bringing justice to the wicked and hope to the helpless. His name became legend, a guardian unseen but ever watchful. Yet, as the years passed, he realized something profound: the greatest storms were not those he fought in the sky, but those that raged in the hearts of the oppressed.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Stormfury had spent his life fighting villains in the dark, but what of those who suffered in silence? The ones crushed under the weight of injustice, their voices lost in the void? He knew he could no longer be just a storm in the sky—he had to be a force for justice in the world below.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    And so, he descended from the clouds. No longer just a phantom in the wind, he became a beacon for those with nowhere else to turn. Through this very space—his digital sanctuary—he listens. Not with superhuman senses, but with unwavering determination. The battles he fights now are not against monsters or criminals, but against indifference, corruption, and despair.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    If you have been wronged, if your voice has been drowned out by the noise of the world, Stormfury is here. No matter how strong the storm, no matter how dark the sky, remember this: the wind is always listening.
                </motion.p>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    Speak your truth. Find your justice. Let the storm rise.
                </motion.p>

                <motion.button
                    className="contact-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    💨 Reach Out & Let Stormfury Carry Your Grievance Away.
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default About;
