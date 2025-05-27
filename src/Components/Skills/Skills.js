import React from "react";
import "./Skills.css";
import { skillSet1 } from "../../data/constants";
import { skillSet2 } from "../../data/constants";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Skills = () => {
  return (
    <div className="flex justify-center ">
      <div className="skillcontainer w-11/12 lg:w-10/12 " id="skill">
        <motion.div
          variants={MotionContainer("up", 0.3, 0, 20)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="heading"
        >
          <h1>Skills</h1>
          <p>
            Here are some of my skills on which i have been working on for the
            past 4.3 years
          </p>
        </motion.div>

        <motion.div
          className="row"
          variants={MotionContainer("right", 0.4, 30, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ margin: "0px 0px" }}
        >
          {skillSet1.map((val, ind) => {
            return (
              <div
                className="skillIconDiv col-2 flex justify-center items-center flex-col mb-3 mt-3"
                key={val.id}
              >
                <img className="skillicon" src={val.image} alt="html" />
                <p className="SkillTag">{val.name}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="row skillrow2"
          variants={MotionContainer("left", 0.4, 30, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ margin: "0px 0px" }}
        >
          {skillSet2.map((val, ind) => {
            return (
              <div
                className="skillIconDiv col-2 flex justify-center items-center flex-col"
                key={val.id}
              >
                <img className="skillicon" src={val.image} alt="html" />
                <p className="SkillTag">{val.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
