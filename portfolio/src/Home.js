import React from 'react';
import Typical from 'react-typical'
import { AnimatePresence, motion, transform} from 'framer-motion';
import './Home.css';
function Home() {
   
    /*
    const ball = document.querySelector('.ball');
    document.onmousemove = function() {
       
        var x = event.clientX*100/window.innerWidth+"%";
        var y = event.clientY*100/window.innerHeight+"%";

        for(var i=0; i<2; i++) {
            ball[i].style.left=x/2;
            ball[i].style.top=y/2;
            ball[i].style.transform="translate("+x+", "+y+")";
        }
    }*/

        function onMouseMoveevent(event)  {
        const ball = document.querySelectorAll('.ball');
        var x = event.clientX*100/window.innerWidth+"%";
        var y = event.clientY*55/window.innerHeight+"%";

        for(var i=0; i<2; i++) {
            ball[i].style.left=x/2;
            ball[i].style.top=y/2;
            ball[i].style.transform="translate("+x+", "+y+")";
        }
    };
    return (

        <motion.div className='home' onMouseMove={onMouseMoveevent}
        initial={{transitionDuration: '0.55s', opacity: 0,  transform: "scale(0.8)" ,  transition: "1s"}}
        animate={{transitionDelay: '0.55s', opacity: 1,  transform: "scale(1)" ,transition: "1s"}}
        exit={{transitionDelay: '0.55s', opacity: 0,  transform: "scale(1.2)" , transition: "1s"}}> 
            <div className='home__content'>
                <div className='content'>
                    <small className='content_bodyStart'> &#8826;body&#8827;</small>
                    <div className='content__h1'>
                        <small className='h1Start'>&#8826;h1&#8827;</small>
                        <h1 className='content__hi'>
                            <span className='letter'>H</span><span className='letter'>i,</span>
                        </h1>
                        <h1 className='content__name'>
                            <span className='letter'>I'</span>
                            <span className='letter'>m</span>
                            <span> </span> 
                            <span className='letter s first__letter'>S</span>
                            <span className='letter'>a</span>
                            <span className='letter'>i</span>
                            <span className='letter'>d</span>
                            <span className='letter'>a</span>
                            <span className='letter'>m</span>
                            <span className='letter'>i</span>
                            <span className='letter'>r</span>
                        </h1>
                        <h1 className='content__title'>
                            <span className='letter' >w</span>
                            <span className='letter'>e</span>
                            <span className='letter'>b</span>
                            <span className='letter'> </span>
                            <span className='letter'>d</span>
                            <span className='letter'>e</span>
                            <span className='letter'>v</span>
                            <span className='letter'>e</span>
                            <span className='letter'>l</span>
                            <span className='letter'>o</span>
                            <span className='letter'>p</span>
                            <span className='letter'>e</span>
                            <span className='letter'>r</span>
                        </h1>
                        <p className='content__p'>MERN Stack Developer || Front end Developer</p>
                        <small className='h1Start'>&#8826;&#8725;h1&#8827;</small>
                    </div>
                    <small className='content_bodyEnd'> &#8826;&#8725;body&#8827;</small>
                </div>
            </div>
            <div className='home__img'>
                <div className='img__body'>
                    <div className='eyes'>
                    <div className='body__eye'>
                        <div className='ball'></div>
                    </div>
                    <div className='body__eye'>
                       <div className='ball'></div>
                    </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}

export default Home;
