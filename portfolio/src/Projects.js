import React from 'react'
import './Projects.css'
import watch from './img/projects/watches.jpg'
import fashion from './img/projects/fashion.jpg'
import comfyhouse from './img/projects/comfyhouse.jpg'
import tinder from './img/projects/tinder.jpg'
import worksrobot from './img/robot/worksrobot.png'
import { AnimatePresence, motion, transform} from 'framer-motion';
function Projects() {
    return (
        <motion.div className='projects'
        initial={{transitionDuration: '0.55s', opacity: 0,  transform: "scale(0.8)" ,  transition: "1s"}}
        animate={{ transitionDelay: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
        exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}>
              <div className='projects__img'>
              <h1>
                <span className='letter first__letter'>M</span>
                <span className='letter'>y</span>
                <span className='letter'> </span>
                <span className='letter first__letter'>W</span>
                <span className='letter'>o</span>
                <span className='letter'>r</span>
                <span className='letter'>k</span>
                <span className='letter'>s</span>  
            </h1>
                <img  src={worksrobot}/>
              </div>
            <div className='projects__container'>
                <div className='container'>
                    <img src={watch}/>
                    <div className='overlay'>
                        <a href='https://futurewatches.netlify.app'>View Project</a>
                        <a href='https://github.com/Saidamir-Sh/10-Projects/tree/master/Watch-Store'>View Code</a>
                    </div>
                </div>
                <div className='container'>
                    <img src={comfyhouse}/>
                    <div className='overlay'>
                        <a href='https://furniturehouseshop.netlify.app/'>View Project</a>
                        <a href='https://github.com/Saidamir-Sh/FurnitureShop-e-commerce-'>View Code</a>
                    </div>
                </div>
                <div className='container'>
                    <img src={fashion}/>
                    <div className='overlay'>
                        <a href='https://fashionclothes.netlify.app'>View Project</a>
                        <a href='https://github.com/Saidamir-Sh/10-Projects/tree/master/landingpage'>View Code</a>
                    </div>
                </div>
                <div className='container'>
                    <img src={tinder}/>
                    <div className='overlay'>
                        <a href='https://tinder-clone-d202d.web.app/'>View Project</a>
                        <a href='https://github.com/Saidamir-Sh/TINDER-CLONE'>View Code</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects

