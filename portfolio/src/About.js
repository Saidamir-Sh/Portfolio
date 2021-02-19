import React from 'react';
import './About.css';
import aboutrobot from './img/robot/aboutrobot.png';
import { AnimatePresence, motion, transform} from 'framer-motion';
function About() {
    return (
        <motion.div className='about'
                    initial={{transitionDuration: '0.55s', opacity: 0,  transform: "scale(0.8)" , transition: "1s"}}
                    animate={{transitionDelay: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
                    exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}>
            <div className='about__text'>
                <div className='text'>
                <h1 className='text__header'>
                <span className='letter first__letter'>A</span>
                <span className='letter'>b</span>
                <span className='letter'>o</span>
                <span className='letter'>u</span>
                <span className='letter'>t</span>
                <span className='letter'> </span>
                <span className='letter'>m</span>
                <span className='letter'>e</span>
                </h1>
                </div>
                <div className='text__paragraph'>
                    <p>I am involved in programming and professionaly connected with web development.</p>
                    <p>Problem solver, innovative, deep learner person. Always strive for better work and learning new things. Learner of SMM, interested in marketing, bussines and social media growing. A pet lover, likes outdoor activities and positive person.</p>
                    <p>Currently Web Developer and working on entire projects.</p>
                </div>
            </div>
            <div className='about__img'>
                <img src={aboutrobot} />
            </div>
        </motion.div>
    )
}

export default About
