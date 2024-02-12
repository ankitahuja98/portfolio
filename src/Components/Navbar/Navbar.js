import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
        }else{
            setNavIcon(Close)
            SetMenu({
                display: "flex",
                height: "20rem",
            })
        }
    }
    return (
        <div className='Nav' style={{height:menu.height}}>
            <div className='NavContainer'>
                <div className='NavLogo'>
                    <img className='w-25' src={logo} alt="logo" />
                </div>
                {/* <div className='MobileIcon'></div> */}
                <div className='NavItems' id="NavItemsID" style={{display:menu.display}}>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/'>Home</NavLink>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/about'>About</NavLink>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/skills'>Skills</NavLink>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/experience'>Experience</NavLink>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/projects'>Projects</NavLink>
                    <NavLink className='NavLink' exact="true" activeclassname='active' aria-current="page" to='/education'>Education</NavLink>
                </div>
                <div className='ButtonContainer'>
                    <a href={Bio.github} rel="noreferrer" target='_blank'>
                        <div className='GithubButton'>Github Profile</div>
                    </a>
                </div>
                <div className='Menu'>
                    <img src={NavIcon} alt='Menu' id="Menu" onClick={MenuBtn} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
