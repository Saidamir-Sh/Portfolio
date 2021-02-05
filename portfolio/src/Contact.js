import React from 'react'
import './Contact.css';
import { AnimatePresence, motion, transform} from 'framer-motion';
function Contact() {
    return (
        <motion.div className='contact'
        initial={{transitionDuration: '0.55s', opacity: 0,  transform: "scale(0.8)" ,  transition: "1s"}}
                animate={{transitionDelay: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
                exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}>
          <div className='contact__form'>
          <small className='content_bodyStart'> &#8826;body&#8827;</small><br></br>
                <small className='h1Start'>&#8826;h1&#8827;</small>
                <h1>
                    <span className='letter first__letter'>C</span>
                    <span className='letter'>o</span>
                    <span className='letter'>n</span>
                    <span className='letter'>t</span>
                    <span className='letter'>a</span>
                    <span className='letter'>c</span>
                    <span className='letter'>t</span>
                    <span className='letter'> </span>
                    <span className='letter first__letter'>m</span>
                    <span className='letter'>e</span>
                </h1>
                <small className='h1Start'>&#8826;&#8725;h1&#8827;</small><br></br>
                    <div className='contact__inputs'>
                        <div className='inputs'>
                            <input type='text' placeholder='Name' required/>
                            <input type='email' placeholder='Email' required/>
                        </div>
                        <div className='input__textarea'>
                            <input  type='text' placeholder='Subject' required/>
                            <textarea placeholder='Message'></textarea>
                        </div>
                        <div className='input__button'>
                            <input type='submit' value='Send' />
                        </div>
                    </div>
                <small className='content_bodyEnd'> &#8826;&#8725;body&#8827;</small>
          </div>
          <div className='contact__map'>
          <iframe src="https://www.google.com/maps/d/embed?mid=1ZF927f3raMe9pOIjQ2YoPM5gJzXosPV9" width="640" height="480" style={{border: '0'}}></iframe>
          </div>
        </motion.div>
    )
}

export default Contact
