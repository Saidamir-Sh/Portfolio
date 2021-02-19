import React from 'react'
import './Skills.css';
import react from './img/skills/react.png';
import skillsrobot from './img/robot/robotskill.png'
import php from './img/skills/php.png';
import mysql from './img/skills/mysql.png';
import js from './img/skills/js.png';
import { AnimatePresence, motion, transform} from 'framer-motion';
function Skills() {
    return (
        <motion.div className='skills'
        initial={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(0.8)" ,  transition: "1s"}}
        animate={{transitionDuration: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
        exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}>
            <div className='skills__text'>
              <div className='text'>
                <h1>
                <span className='letter first__letter'>S</span>
                <span className='letter'>k</span>
                <span className='letter'>i</span>
                <span className='letter'>l</span>
                <span className='letter'>l</span>
                <span className='letter'>s</span>
                </h1>
                <p>The main part of my work is client-side development.</p>

                <p>Currently building React applications, web apps, animated landing pages by using HTML/CSS, JavaScript. I have also server-side experience with PHP and MySQL. I am also interested with creative web designs.</p>
                <p><a href='./img/Saidamir_Resume.pdf' download className='skills__a'>Download</a> my CV for more information or just visit my <a className='skills__a' href="https://github.com/Saidamir-Sh?tab=repositories">Github</a> profile in order to see my works.</p>
              </div>
            <div className='text__card'>
                <div className='card'>
                    <img src={js} />
                    <h4>JavaScript</h4>
                </div>
                <div className='card'>
                    <img src={php} />
                    <h4>PHP</h4>
                </div>
                <div className='card'>
                    <img src={mysql} />
                    <h4>MySQL</h4>
                </div>
                <div className='card'>
                    <img src={react} />
                    <h4>ReactJS</h4>
                </div>
            </div>

            </div>
            <div className='skills__img'>
                <img src={skillsrobot} />
            </div>
        </motion.div>
    )
}

export default Skills
