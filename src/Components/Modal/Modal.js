import React from 'react';
import MsgSent from '../../Images/MsgSent.gif';
import "./Modal.css";

const Modal = () => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="modal-content">
                    <div className="modal-body text-center p-5">
                        <img src={MsgSent} alt='MsgSent' trigger="loop" style={{ width: "120px", height: "120px" }}></img>
                        <div className="mt-4">
                            <h4 className="mb-3">Message Sent</h4>
                            <p className="text-muted mb-4"> I will contact you shortly.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

  )
}

export default Modal
