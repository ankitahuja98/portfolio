import React from 'react';
import './Hero.css';
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import MainPic from "../../Images/Main.png";

const Hero = () => {
  return (
    <div id='HeroSection'>
      <div className='HeroContainer '>
        <div className='container d-flex justify-content-between'>
          <div className='row'>

            {/* Hero Section Left Started */}
            <div className='HeroLeft col-12 col-md-12 col-lg-6 order-1 order-lg-0'>
              <div className='HeroLeftContainer'>
                <div className='Title'>Hi, I am {Bio.name}</div>
                <div className='Textloop'>
                  I am a
                  <span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
                <div className='Subtitle'>
                  {Bio.description}
                </div>

                {/* Resume button started */}
                <div className='btn btn-outline-primary ResumeButton my-3' >
                  <a href={Bio.resume} rel="noreferrer" target='_blank'> <div className='ResumeButtondiv'>Check Resume</div></a>
                </div>
                {/* Resume button Ended */}


                <div className='row w-100 d-flex justify-content-center align-items-center mt-3'>
                  {/* Github button started */}
                  <div className='col-06 GitProfileBtn'>
                    <div className='BtnContainer githubcontainer'>
                      <a className='GithubBtnA' href={Bio.github} rel="noreferrer" target='_blank'>
                        <p className='GithubButton'>Github Profile</p>
                      </a>
                    </div>
                  </div>
                  {/* Github button ended */}

                  {/* Linkedin button started */}
                  <div className='col-06 LinkProfileBtn'>
                    <div className='BtnContainer Linkedincontainer'>
                      <a className='LinkedinBtnA' href={Bio.linkedin} rel="noreferrer" target='_blank'>
                        <p className='LinkedinButton'>Linkedin Profile</p>
                      </a>
                    </div>
                  </div>
                  {/*Linkedin button ended */}
                </div>


              </div>
            </div>
            {/* Hero Section Left Ended */}

            {/* Hero Section Right Started */}
            <div className='HeroRight col-6 col-md-6 col-lg-6 order-0 order-lg-1'>
              <div className='HeroRightContainer d-flex justify-content-center align-items-center'>
                <img src={MainPic} alt='mainpic' />
              </div>
            </div>
            {/* Hero Section Right Ended */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
