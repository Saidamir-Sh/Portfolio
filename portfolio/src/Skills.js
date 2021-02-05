import React from 'react'
import './Skills.css';
import react from './img/skills/react.png';
import skillsrobot from './img/robot/robotskill.png'
import express from './img/skills/express.png';
import mongo from './img/skills/mongo.png';
import node from './img/skills/node.png';
import Tilt from 'react-vanilla-tilt';
import { AnimatePresence, motion, transform} from 'framer-motion';
function Skills() {
    return (
        <motion.div className='skills'
        initial={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(0.8)" ,  transition: "1s"}}
        animate={{transitionDuration: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
        exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}>
            <div className='skills__text'>
              <div className='text'>
              <small className='content_bodyStart'> &#8826;body&#8827;</small><br></br>
              <small className='h1Start'>&#8826;h1&#8827;</small>
                <h1>
                <span className='letter first__letter'>S</span>
                <span className='letter'>k</span>
                <span className='letter'>i</span>
                <span className='letter'>l</span>
                <span className='letter'>l</span>
                <span className='letter'>s</span>
                </h1>
                <small className='h1Start'>&#8826;&#8725;h1&#8827;</small>
                <small className='content_bodyEnd'> &#8826;p&#8827;</small>
                <p>The main part of my work is client-side development.</p>

                <p>Currently building React applications, web apps, animated landing pages by using HTML/CSS, JavaScript. I have also server-side experience with MongoDB and NodeJS. I am also interested with creative web designs.</p>
                <p><a href='./img/Saidamir_Resume.pdf' download className='skills__a'>Download</a> my CV for more information or just visit my <a className='skills__a' href="https://github.com/Saidamir-Sh?tab=repositories">Github</a> profile in order to see my works.</p>
                <small className='content_bodyEnd'> &#8826;&#8725;p&#8827;</small>
              </div>
            <div className='text__card'>
                <div className='card'>
                    <img src={node} />
                    <h4>NodeJS</h4>
                </div>
                <div className='card'>
                    <img src={express} />
                    <h4>Express</h4>
                </div>
                <div className='card'>
                    <img src={mongo} />
                    <h4>MongoDB</h4>
                </div>
                <div className='card'>
                    <img src={react} />
                    <h4>ReactJS</h4>
                </div>
            </div>

            <small className='content_bodyEnd'> &#8826;&#8725;body&#8827;</small>
            </div>
            <div className='skills__img'>
                <img src={skillsrobot} />
            </div>
        </motion.div>
    )
}

export default Skills
