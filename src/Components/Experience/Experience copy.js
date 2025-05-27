import React from "react";
import "./Experience.css";
import { experiences } from "../../data/constants";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Experience = () => {
  return (
    <div className="container expContainer" id="experience">
      <motion.div
        className="ExpHeading"
        variants={MotionContainer("up", 0.3, 0, 20)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1>Experience</h1>
        <p className="ExpHeadingBody">
          My work experience as a Software Engineer and working on different
          companies and projects.
        </p>
      </motion.div>

      {experiences.map((val, ind) => {
        const { image, role, company, date, desc, skills } = val;
        return (
          <motion.div
            variants={MotionContainer("up", 0.3, 0, 20)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="Exp_card"
            key={val.id}
          >
            <div className="flex">
              <img className="CompanyLogo" src={image} alt="CompanyLogo" />

              <div className="title ml-5">
                <h5>{company}</h5>
                <h6>{role}</h6>
                <p>{date}</p>
              </div>
            </div>
            {skills && skills.length > 0 && (
              <div className="mb-3">
                {skills.map((skills) => (
                  <button className="skills" key={skills.id}>
                    {skills}
                  </button>
                ))}
              </div>
            )}
            {desc && desc.length > 0 && (
              <div>
                {desc.map((val) => (
                  <div key={val.pt} className="mt-3 text-justify">
                    <p
                      className="mb-2 jobDescTitle"
                      style={{ fontWeight: "500" }}
                    >
                      {val.heading}
                    </p>
                    <p className="jobDesp mb-0">{val.body}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Experience;
