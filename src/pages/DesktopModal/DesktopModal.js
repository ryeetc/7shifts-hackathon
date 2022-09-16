import "./DesktopModal.scss"
import X from "../../icons/Icons_Times.svg"
import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Check from "../../icons/greencheck.svg"

const DesktopModal = ({setIsOverlay, isScheduled, handleScheduleClick, handleDoneClick}) => {

    const navigate = useNavigate()
  

    if (isScheduled) {
        return (
            <main className="modal__main">
                <div className="modal__desktop">
                    <div onClick={handleDoneClick} className="modal__x">
                        <img className="modal__img" src={X}></img>
                    </div>
                    <div className="modal__check add">
                        <img className="modal__img--check" src={Check}></img>
                    </div>
                    <div className="modal__title add">
                        <h1 className="modal__header">You've scheduled a check-in with Bob</h1>
                    </div>
                    <div className="modal__content add">
                        <p className="modal__p">Friday September 17, 2022 @ 4:00 p.m.</p>
                    </div>
                    <div className="modal__button">
                        <button onClick={handleDoneClick} className="modal__button--right">Done</button>
                    </div>

                </div>
            </main>
        )
    }

    return (
        <main className="modal__main">
            <div className="modal__desktop">
                <div className="modal__x">
                    <img onClick={handleDoneClick} className="modal__img" src={X}></img>
                </div>
                <div className="modal__title whitespace">
                    <h1 className="modal__header">Congratulate Bob on reaching his goal!</h1>
                </div>
                <div className="modal__content whitespace">
                    <p className="modal__p">It's time to schedule a check-in call with Bob to follow up on his long-term goals.</p>
                </div>
                <div className="modal__button">
                    <button onClick={handleDoneClick} className="modal__button--left">Remind Me</button>
                    <button onClick={handleScheduleClick} className="modal__button--right">Schedule</button>
                </div>

            </div>
        </main>
    )
}

export default DesktopModal