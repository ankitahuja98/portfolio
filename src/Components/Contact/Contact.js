import React, { useEffect, useState } from "react";
import "./Contact.css";
import Contact_img from "../../Images/conversation.gif";
import { useFormik } from "formik";
import { validation } from "../../Schemas/index";
import emailjs from "@emailjs/browser";
import ModalComponent from "../Modal/Modal";
import { motion } from "framer-motion";
import { MotionContainer } from "../../utils/MotionContainer";

const Contact = () => {
  const [BtnDisplay, setBtnDisplay] = useState(true);

  const [Modal, SetModal] = useState("false");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validation,
      onSubmit: (value, action) => {
        action.resetForm();
      },
    });

  // Email Function Started
  const SentEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_kz4remz", "template_ywzbmma", values, "2yCmlqpsB2GvaghIw")
      .then((res) => {
        // console.log("Email Sent Successfully",res)
      })
      .catch((err) => {
        console.log("Error", err);
      });

    SetModal("true");
    setTimeout(() => {
      SetModal("false");
    }, 2000);

    handleSubmit();
  };
  // Email Function Ended

  useEffect(() => {
    if (
      errors.name ||
      errors.email ||
      errors.message ||
      values.name === "" ||
      values.email === "" ||
      values.message === ""
    ) {
      setBtnDisplay(true);
    } else {
      setBtnDisplay(false);
    }
  }, [errors, values]);

  return (
    <div className="ContactContainer" id="contact">
      <div className="container">
        <div className="row">
          {/* Contact detail section started */}
          <div className="col-12 col-lg-6 ContactCol">
            <motion.div
              className="contact_heading InputDiv"
              variants={MotionContainer("left", 0.3, 30, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p>GET IN TOUCH</p>
              <h1>Contact</h1>
            </motion.div>

            <form className="contact_form">
              <motion.div
                variants={MotionContainer("right", 0.3, 30, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="distanceDiv InputDiv">
                  <label htmlFor="name">Name</label>
                </div>
                <div className="InputDiv">
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your full name"
                  ></input>
                </div>
                {errors.name && touched.name ? (
                  <p className="formError">{errors.name}</p>
                ) : null}
              </motion.div>

              <motion.div
                variants={MotionContainer("right", 0.4, 30, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="distanceDiv InputDiv">
                  <label htmlFor="email">Email</label>
                </div>
                <div className="InputDiv">
                  <input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                  ></input>
                </div>
                {errors.email && touched.email ? (
                  <p className="formError">{errors.email}</p>
                ) : null}
              </motion.div>

              <motion.div
                variants={MotionContainer("right", 0.5, 30, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="distanceDiv InputDiv">
                  <label htmlFor="message">Message</label>
                </div>
                <div className="InputDiv">
                  <textarea
                    id="message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    rows="8"
                    autoComplete="off"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                {errors.message && touched.message ? (
                  <p className="formError">{errors.message}</p>
                ) : null}
              </motion.div>

              <motion.div
                variants={MotionContainer("right", 0.6, 30, 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="mt-3 InputDiv">
                  <button
                    disabled={BtnDisplay}
                    className="sendbtn"
                    type="button"
                    onClick={SentEmail}
                  >
                    Send
                  </button>
                </div>
              </motion.div>
            </form>
          </div>
          {/* Contact detail section Ended */}

          {/* Contact Image section started */}
          <motion.div
            className="col-12 col-lg-6 ContactImgDiv"
            variants={MotionContainer("up", 0.5, 0, 30)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img className="conatctImg" src={Contact_img} alt="Contact" />
          </motion.div>
          {/* Contact Image section Ended */}
        </div>
      </div>

      {Modal === "true" ? <ModalComponent /> : null}
    </div>
  );
};

export default Contact;
