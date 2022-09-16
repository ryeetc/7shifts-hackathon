import './TaskCard.scss';
import Modal from "../Modal/Modal";
import { useState } from "react";
import blurredOne from '../../assets/images/image-2.png';
import blurredTwo from '../../assets/images/image-3.png';
import successImage from '../../assets/images/Component-4.svg';
import checkMark from '../../icons/checkmarkGreen.svg'


function TaskCard() {
  
  const [modal, setModal] = useState(false);
  const [blurr, setBlurr] = useState(false);
  const [checkmark, setCheckmark] = useState(false);

  const toggleModal = () => {
    setTimeout(()=>{setModal(true)}, 1100);
    setBlurr(true);
    setCheckmark(true);
  };



  if(modal) {
    return (
      <div className='task-card__section'>
        <Modal modal={modal} setModal={setModal}/>
         <div className='task-card'><img onClick={toggleModal} className = {blurr ? "task-card__img" : ""}src={successImage} alt="communication skills" /></div> 
         {checkmark ? <div className='abso'><img src={checkMark} alt="check" /></div> : null}
        <div className='task-card'><img  src={blurredOne} alt="blurred" /></div>
        <div className='task-card'><img src={blurredTwo} alt="blurred2" /></div>
      </div>
    )
  }


  return (
    <div className='task-card__section'>
      
       <div className='task-card'><img onClick={toggleModal} className = {blurr ? "task-card__img" : ""}src={successImage} alt="communication skills" /></div> 
       {checkmark ? <div className='abso'><img src={checkMark} alt="check" /></div> : null}
      <div className='task-card'><img  src={blurredOne} alt="blurred" /></div>
      <div className='task-card'><img src={blurredTwo} alt="blurred2" /></div>
    </div>
  )
}

export default TaskCard