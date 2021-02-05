import React, { useState } from 'react'
import './Navbar.css';
import IconButton from '@material-ui/core/IconButton';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SettingsEthernetOutlinedIcon from '@material-ui/icons/SettingsEthernetOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

function Navbar() {
    var [menuActive, setMenuState] = useState(false);
  
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <h1>S</h1>
            </div>
            <div className='navbar__buttons'>
                
                <Link exact to='/'>
                <IconButton >
                    <HomeOutlinedIcon  className='buttons buttons__about '></HomeOutlinedIcon>
                    </IconButton>
                </Link>
              
                <Link exact to='/about'>
                <IconButton >
                    <PersonOutlineOutlinedIcon    className='buttons buttons__about'></PersonOutlineOutlinedIcon>
                </IconButton>
                </Link>
                <Link exact to='/skills'>
                <IconButton>
                    <SettingsEthernetOutlinedIcon className='buttons buttons__skills'></SettingsEthernetOutlinedIcon>
                </IconButton>
                </Link>
                <Link exact to='/projects'>
                <IconButton>
                    <VisibilityOutlinedIcon className='buttons buttons__project'></VisibilityOutlinedIcon>
                </IconButton>
                </Link>
                <Link exact to='/contact'>
                <IconButton>
                    <EmailOutlinedIcon className='buttons buttons__contact' fontSize='22px'></EmailOutlinedIcon>
                </IconButton>
                </Link>
            </div>
            <div className='navbar__media'>
                <a href='https://www.instagram.com/braincoding/'>
                    <InstagramIcon className='media' fontSize='small'></InstagramIcon>
                </a>
                <a href='https://www.facebook.com/saidamir.sharofuddinov.9'>
                    <FacebookIcon className='media' fontSize='small'></FacebookIcon>
                </a>
                <a href='https://www.linkedin.com/in/saidamir-sharofuddinov-4177251a0'>
                    <LinkedInIcon className='media' fontSize='small'></LinkedInIcon>
                </a>
                <a href='https://twitter.com/Saidamir_Sh?s=09'>
                    <TwitterIcon className='media' fontSize='small'></TwitterIcon>
                </a>
            </div>
        </div>
    )
}

export default Navbar;
