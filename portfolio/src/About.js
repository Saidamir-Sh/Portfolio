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
                <small className='content_bodyStart'> &#8826;body&#8827;</small>
                <small className='h1Start'>&#8826;h1&#8827;</small>
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
                <small className='h1Start'>&#8826;&#8725;h1&#8827;</small>  
                </div>
                <div className='text__paragraph'>
                <small className='content_bodyEnd'> &#8826;p&#8827;</small>
                    <p>I am involved in programming and professionaly connected with web development.</p>
                    <p>Problem solver, innovative, deep learner person. Always strive for better work and learning new things. Learner of SMM, interested in marketing, bussines and social media growing. A pet lover, likes outdoor activities and positive person.</p>
                    <p>Currently Junior Front end Developer and working on entire MERN stack projects.</p>
                    <small className='content_bodyEnd'> &#8826;&#8725;p&#8827;</small>
                    <small className='content_bodyEnd'> &#8826;&#8725;body&#8827;</small>
                </div>
            </div>
            <div className='about__img'>
                <img src={aboutrobot} />
            </div>
        </motion.div>
    )
}

export default About
