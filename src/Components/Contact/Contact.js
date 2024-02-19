import React, { useEffect, useState } from 'react'
import './Contact.css';
import Contact_img from '../../Images/conversation.gif'
import { useFormik } from 'formik';
import { validation } from '../../Schemas/index'
import emailjs from '@emailjs/browser';
import ModalComponent from '../Modal/Modal'

const Contact = () => {
    const [BtnDisplay, setBtnDisplay] = useState(true);

    const [Modal, SetModal] = useState("false")

    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const { values, errors, touched, handleBlur, handleChange,handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: (value, action) => {
            action.resetForm();
        }
    })

    // Email Function Started
    const SentEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_kz4remz", "template_ywzbmma", values, "2yCmlqpsB2GvaghIw")
            .then( res => {
                // console.log("Email Sent Successfully",res)
            }).catch(err => {
                console.log("Error", err)
            })

        SetModal("true");
        setTimeout(() => {
            SetModal("false")
        }, 2000);

        handleSubmit();
    }
    // Email Function Ended

    useEffect(() => {
        if (((errors.name) || (errors.email) || (errors.message)) ||
            ((values.name === "") || (values.email === "") || (values.message === ""))) {
            setBtnDisplay(true)
        } else {
            setBtnDisplay(false)
        }
    }, [errors, values])


    return (
        <div className='ContactContainer' id='contact'>

            <div className='container'>

                <div className='row'>

                    {/* Contact detail section started */}
                    <div className='col-12 col-lg-6 ContactCol'>
                        <div className='contact_heading InputDiv'>
                            <p>GET IN TOUCH</p>
                            <h1>Contact</h1>
                        </div>

                        <form className='contact_form'>
                            <div className='distanceDiv InputDiv'>
                                <label htmlFor='name'>Your Name</label>
                            </div>
                            <div className='InputDiv'>
                                <input id='name'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='text'
                                    autoComplete='off'
                                    placeholder="What's your good name"></input>
                            </div>
                            {errors.name && touched.name ? <p className='formError'>{errors.name}</p> : null}

                            <div className='distanceDiv InputDiv'>
                                <label htmlFor='email'>Your Email</label>
                            </div>
                            <div className='InputDiv'>
                                <input id='email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='email'
                                    autoComplete='off'
                                    placeholder="What's your email"></input>
                            </div>
                            {errors.email && touched.email ? <p className='formError'>{errors.email}</p> : null}

                            <div className='distanceDiv InputDiv'>
                                <label htmlFor='message'>Your Message</label>
                            </div>
                            <div className='InputDiv'>
                                <textarea id='message'
                                    name='message'
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='text'
                                    rows='8'
                                    autoComplete='off'
                                    placeholder="What you want to say?"></textarea>
                            </div>
                            {errors.message && touched.message ? <p className='formError'>{errors.message}</p> : null}

                            <div className='mt-3 InputDiv'>
                                <button disabled={BtnDisplay} className='sendbtn' type='button'
                                    onClick={SentEmail}>Send
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact detail section Ended */}



                    {/* Contact Image section started */}
                    <div className='col-12 col-lg-6 ContactImgDiv'>
                        <img className='conatctImg' src={Contact_img} alt='Contact' />
                    </div>
                    {/* Contact Image section Ended */}

                </div>
            </div>

            {Modal === "true" ? <ModalComponent /> : null}

        </div>
    )
}

export default Contact
