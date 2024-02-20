import React, { useState } from 'react'
import {Link} from 'react-scroll';
import './Navbar.css';
import { Bio } from '../../data/constants'
import logo from '../../Images/logo.png'
import Menu from '../../Images/hamburger.png'
import Close from '../../Images/close.png'


const Navbar = () => {
    const [menu, SetMenu] = useState({
        display: "none",
        height: "3.8rem",
    });

    const [NavIcon, setNavIcon] = useState(Menu)

    const MenuBtn = () => {
        if (menu.display !== "none") {
            setNavIcon(Menu)
            SetMenu({
                display: "none",
                height: "3.8rem",
            })
        } else {
            setNavIcon(Close)
            SetMenu({
                display: "flex",
                height: "20rem",
            })
        }
    }
    return (
        <div className='Nav' style={{ height: menu.height }}>
            <div className='NavContainer'>
                <div className='NavLogo'>
                    <img src={logo} alt="logo" />
                </div>
                {/* <div className='MobileIcon'></div> */}
                <div className='NavItems' id="NavItemsID" style={{ display: menu.display }}>
                    <Link className='NavLink' exact="true" activeclassname='active' aria-current="page" to='HeroSection' spy={true} smooth={true} offset={-100} duration={200}>Home</Link>
                    <Link className='NavLink' exact="true" activeclassname='active' aria-current="page" to='skill' spy={true} smooth={true} offset={-100} duration={200}>Skills</Link>
                    <Link className='NavLink' exact="true" activeclassname='active' aria-current="page" to='experience' spy={true} smooth={true} offset={-100} duration={200}>Experience</Link>
                    <Link className='NavLink' exact="true" activeclassname='active' aria-current="page" to='projects' spy={true} smooth={true} offset={-100} duration={200}>Projects</Link>
                    <Link className='NavLink' exact="true" activeclassname='active' aria-current="page" to='contact' spy={true} smooth={true} offset={-80} duration={200}>Contact</Link>
                </div>

                {/* Github button started */}
                <div className='ButtonContainer githubcontainer'>
                    <a className='GithubBtnA' href={Bio.github} rel="noreferrer" target='_blank'>
                        <p className='GithubButton'>Github Profile</p>
                    </a>
                </div>
                {/* Github button ended */}
                {/* Linkedin button started */}
                <div className='ButtonContainer Linkedincontainer'>
                    <a className='LinkedinBtnA' href={Bio.linkedin} rel="noreferrer" target='_blank'>
                        <p className='LinkedinButton'>Linkedin Profile</p>
                    </a>
                </div>
                {/*Linkedin button ended */}


                <div className='Menu'>
                    <img src={NavIcon} alt='Menu' id="Menu" onClick={MenuBtn} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
