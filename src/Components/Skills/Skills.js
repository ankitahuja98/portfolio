import React, { useEffect, useState } from 'react';
import './Skills.css';
import html from '../../Images/SkillsIcons/html.png';
import css from '../../Images/SkillsIcons/css.png';
import javascript from '../../Images/SkillsIcons/javascript.png';
import bootstrap from '../../Images/SkillsIcons/bootstrap.png';
import react from '../../Images/SkillsIcons/react.png';
import redux from '../../Images/SkillsIcons/redux.png';
import nodejs from '../../Images/SkillsIcons/nodejs.png';
import postgresql from '../../Images/SkillsIcons/postgresql.png';
import git from '../../Images/SkillsIcons/git.png';
import jquery from '../../Images/SkillsIcons/jquery.png';
import useWindowDimensions from '../CurrentScreenSize';

const Skills = () => {
  const {width } = useWindowDimensions();

  const [icon, seticon] = useState("flex")

  const [icon2, seticon2] = useState("none")

  useEffect(() => {
    if (width < 500) {
      seticon("none")
      seticon2("flex")
    }
    if (width > 500) {
      seticon("flex")
      seticon2("none")
    }
  },[width])
  return (
    <div className='container skillcontainer'>

      <div className='heading'>
        <h1>Skills</h1>
        <p>Here are some of my skills on which i have been working on for the<br /> past 3 years</p>
      </div>

      <div className='row skillrow1'>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={html} alt="html" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={css} alt="css" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={javascript} alt="javascript" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={bootstrap} alt="bootstrap" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={react} alt="react" />
        </div>

        <div className='col-01 skillCol' style={{ display: icon }}>
          <img className="skillicon" src={redux} alt="redux"  />
        </div>

      </div>

      <div className='row skillrow2'>

        <div className='col-01 skillCol' style={{ display: icon2 }}>
          <img className="skillicon" src={redux} alt="redux"  />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={nodejs} alt="nodejs" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={postgresql} alt="postgresql" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={git} alt="git" />
        </div>

        <div className='col-01 skillCol'>
          <img className="skillicon" src={jquery} alt="jquery" />
        </div>

      </div>

    </div>
  )
}

export default Skills
