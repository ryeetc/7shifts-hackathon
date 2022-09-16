import React, { useState } from "react";
import crown from "../../assets/images/crown.svg"
import "./Modal.scss";

export default function Modal({setModal, modal}) {
  
  const handleNix = ()=>{
    setModal(false)
  }



  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-crown"> 
            <img className="crown" src={crown} alt="" />
            </div>
            <div className="modal-container"> 
              <h2 className="modal-subheader">Congratulations</h2>
              <div className="modal-paragraph"> 
              <p className="paragraph">
                New achievement unlocked.
                Here is your crown for your profile image.
              </p>
              </div>
              <div className="button"> 
              <button onClick={handleNix} className="close-modal" >
                Add to profile
              </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}