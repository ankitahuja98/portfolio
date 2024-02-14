import React, { useEffect, useState } from 'react';
import "./Experience.css";
import CompanyLogo from "../../Images/DGDE-Logo2.png"
import useWindowDimensions from '../CurrentScreenSize';

const Experience = () => {
    const { width } = useWindowDimensions();

    const [Companylogo_col, setCompanylogo_col] = useState("col-2")

    const [CompanyTitle_col, setCompanyTitle_col] = useState("col-10")

    useEffect(() => {
        if (width < 768) {
            setCompanylogo_col("col-3");
            setCompanyTitle_col("col-8");
        } else if (width > 768) {
            setCompanylogo_col("col-2");
            setCompanyTitle_col("col-10");
        }
    }, [width])

    return (
        <div className='container expContainer'>

            <div className='ExpHeading'>
                <h1>Experience</h1>
                <p>My work experience as a Software Engineer and working on different companies and projects.</p>
            </div>

            <div className='Exp_card'>

                <div className='row card_heading'>
                    <div className={Companylogo_col}>
                        <div className='Clogo'>
                            <img className='CompanyLogo' src={CompanyLogo} alt="CompanyLogo" />
                        </div>
                    </div>

                    <div className={CompanyTitle_col}>
                        <div className='title'>
                            <h5>Directorate General Defence Estates</h5>
                            <h6>Programmer</h6>
                            <p>March/2021 - Present</p>
                        </div>
                    </div>
                </div>

                <div className='row card_body'>
                    <div className='col-12'>
                        <p className='jobDesp'>As an accomplished Frontend Developer with three years of hands-on experience, I excel in crafting immersive web experiences by leveraging a robust skill set. </p>
                        <div className='row'>
                            <div className='col-1'>
                                <p id='Skill'>Skills:</p>
                            </div>
                            <div className='col-11 skillTag'>
                                <p>&#x2022;&nbsp;ReactJS &nbsp;&nbsp; &#x2022;&nbsp;NodeJS &nbsp;&nbsp; &#x2022;&nbsp;Javascript &nbsp;&nbsp; &#x2022;&nbsp;JQuery &nbsp;&nbsp; &#x2022;&nbsp;PostgreSQL &nbsp;&nbsp; &#x2022;&nbsp;GIT &nbsp;&nbsp; &#x2022;&nbsp;Bootstrap &nbsp;&nbsp; &#x2022;&nbsp;CSS &nbsp;&nbsp; &#x2022;&nbsp;HTML</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experience
