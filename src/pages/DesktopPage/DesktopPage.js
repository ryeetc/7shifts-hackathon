import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import "./DesktopPage.scss"
import Clock from "../../icons/Icons_Clock.svg"
import Ellipsis from "../../icons/Icons_Ellipsis.svg"
import Completed from "../../icons/greencheck.svg"
import CalendarGrey from "../../icons/Icons_CalendarGrey.svg"
import Left from "../../icons/Icons_ChevronLeft.svg"
import LeftArrow from "../../icons/Icons_ArrowLeft.svg"
import RightArrow from "../../icons/Icons_ArrowRight.svg"
import { useState } from "react";
import DesktopModal from "../DesktopModal/DesktopModal";
import ArrowFaint from "../../icons/arrow-down.svg"


const DesktopPage = () => {

    let key = 4

    const [isOverlay, setIsOverlay] = useState(false)

    const [isScheduled, setIsScheduled] = useState(false)

    const handleScheduleClick = () => {
        setIsScheduled(true)
    }

    const handleDoneClick = () => {
        setIsOverlay(false)
        key++

    }


    const handleClick = () => {
        setIsOverlay(true)
    }

    const overlay = document.getElementsByClassName("nodisplay")
    const modal = document.getElementsByClassName("hide")

    if (isOverlay) {
        return (
            <div key={key}>
                <DesktopHeader />
                <DesktopModal setIsOverlay={setIsOverlay} handleScheduleClick={handleScheduleClick} handleDoneClick={handleDoneClick} isScheduled={isScheduled}/>
                <div className="overlay-ryan"></div>
                <main className="main">
                    <div className="back">
                        <img className="back__img" src={Left}></img>
                        <span className="back__text">Back</span>
                    </div>
                    <h1 className="main__header">Employee Goals</h1>
                    <nav className="main__nav">
                        <span className="main__nav--item active">View</span>
                        <span className="main__nav--item">Manage</span>
                        <span className="main__nav--item">Team Goals</span>
                        <span className="main__nav--item">Restaurant Goals</span>
                        <span className="main__nav--item">Events</span>
                        <span className="main__nav--item">In Progress</span>
                        <span className="main__nav--item">Completed</span>
                    </nav>
                    <div className="card__headers">
                        <div className="label__holder">
                            <span className="card__headers--label">Employee</span>
                        </div>
                        <div className="label__holder">
                            <span className="card__headers--label">Status</span>
                        </div>
                        <div className="label__holder">
                            <span className="card__headers--label">Goal Status</span>
                        </div>
                        <div className="label__holder">
                            <span className="card__headers--label displaynone">None</span>
                        </div>
                    </div>
                    <div className="card__holder">
                        <div className="card">
                            <div className="card__div">
                                <span className="card__div--span">Bob Joe</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">Complete</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">4/4</span>
                            </div>
                            <div className="card__div image__holder">
                                <img className="card__div--img" src={CalendarGrey}></img>
                                <img className="card__div--img completed" onClick={handleClick} src={Completed}></img>
                                <img className="card__div--img" src={Ellipsis}></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__div">
                                <span className="card__div--span">Hugo Habercore</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">In Progress</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">2/4</span>
                            </div>
                            <div className="card__div image__holder">
                                <img className="card__div--img" src={Clock}></img>
                                <img className="card__div--img" src={Ellipsis}></img>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__div">
                                <span className="card__div--span">Felix Fisoeder</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">In Progress</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">1/4</span>
                            </div>
                            <div className="card__div image__holder">
                                <img className="card__div--img" src={Clock}></img>
                                <img className="card__div--img" src={Ellipsis}></img>
                            </div>
                        </div>
                        <div className="card bottom">
                            <div className="card__div">
                                <span className="card__div--span">Louise Belcher</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">In Progress</span>
                            </div>
                            <div className="card__div">
                                <span className="card__div--span">1/4</span>
                            </div>
                            <div className="card__div image__holder">
                                <img className="card__div--img" src={Clock}></img>
                                <img className="card__div--img" src={Ellipsis}></img>
                            </div>
                        </div>
                    </div>
                    <div className="arrow">
                        <div className="arrow__item left">
                            <img className="arrow__left" src={ArrowFaint}></img>
                        </div>
                        <div className="arrow__item">
                            <img className="arrow__right" src={RightArrow}></img>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <>
            <DesktopHeader />
            <main className="main">
                <div className="back">
                    <img className="back__img" src={Left}></img>
                    <span className="back__text">Back</span>
                </div>
                <h1 className="main__header">Employee Goals</h1>
                <nav className="main__nav">
                    <span className="main__nav--item active">View</span>
                    <span className="main__nav--item">Manage</span>
                    <span className="main__nav--item">Team Goals</span>
                    <span className="main__nav--item">Restaurant Goals</span>
                    <span className="main__nav--item">Events</span>
                    <span className="main__nav--item">In Progress</span>
                    <span className="main__nav--item">Completed</span>
                </nav>
                <div className="card__headers">
                    <div className="label__holder">
                        <span className="card__headers--label">Employee</span>
                    </div>
                    <div className="label__holder">
                        <span className="card__headers--label">Status</span>
                    </div>
                    <div className="label__holder">
                        <span className="card__headers--label">Goal Status</span>
                    </div>
                    <div className="label__holder">
                        <span className="card__headers--label displaynone">None</span>
                    </div>
                </div>
                <div className="card__holder">
                    <div className="card">
                        <div className="card__div">
                            <span className="card__div--span">Bob Joe</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">Complete</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">4/4</span>
                        </div>
                        <div className="card__div image__holder">
                            <img className="card__div--img" src={CalendarGrey}></img>
                            <img className="card__div--img completed" onClick={handleClick} src={Completed}></img>
                            <img className="card__div--img" src={Ellipsis}></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__div">
                            <span className="card__div--span">Hugo Habercore</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">In Progress</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">2/4</span>
                        </div>
                        <div className="card__div image__holder">
                            <img className="card__div--img" src={Clock}></img>
                            <img className="card__div--img" src={Ellipsis}></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__div">
                            <span className="card__div--span">Felix Fisoeder</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">In Progress</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">1/4</span>
                        </div>
                        <div className="card__div image__holder">
                            <img className="card__div--img" src={Clock}></img>
                            <img className="card__div--img" src={Ellipsis}></img>
                        </div>
                    </div>
                    <div className="card bottom">
                        <div className="card__div">
                            <span className="card__div--span">Louise Belcher</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">In Progress</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">1/4</span>
                        </div>
                        <div className="card__div image__holder">
                            <img className="card__div--img" src={Clock}></img>
                            <img className="card__div--img" src={Ellipsis}></img>
                        </div>
                    </div>
                </div>
                <div className="arrow">
                    <div className="arrow__item left">
                        <img className="arrow__left" src={LeftArrow}></img>
                    </div>
                    <div className="arrow__item">
                        <img className="arrow__right" src={RightArrow}></img>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DesktopPage