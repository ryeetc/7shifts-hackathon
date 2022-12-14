import "./DesktopHeader.scss"
import Speedometer from "../../icons/Icons_Tachometer.svg"
import Calendar from "../../icons/Icons_CalendarAlt.svg"
import Timer from "../../icons/Icons_Stopwatch.svg"
import Clipboard from "../../icons/Icons_ClipboardList.svg"
import Check from "../../icons/Icons_Check.svg"
import Smile from "../../icons/Icons_GrinBeam.svg"
import Graph from "../../icons/Icons_ChartBar.svg"
import Chevron from "../../icons/Icons_ChevronDown.svg"
import Magnify from "../../icons/Icons_Search.svg"
import Megaphone from "../../icons/Icons_Megaphone.svg"
import Chatbubble from "../../icons/Icons_CommentLines.svg"
import Avatar from "../../icons/avatar-7.jpeg"
import Burger from "../../icons/burger.png"
import shiftsLogo from "../../icons/7shiftsLogo.png"

const DesktopHeader = () => {
    return (
        <header className="header-desk">
            <div className="header-desk__brand">
                <img className="header-desk__logo" src={Burger} alt="logo"></img>
                <span className="header-desk__title">Shifty 6's Burgers</span>
            </div>
            <nav className="nav-desk">
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Speedometer} alt="speedometer"></img>
                    <span className="nav-desk__span">Dashboard</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Calendar} alt="calendar"></img>
                    <span className="nav-desk__span">Schedules</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Timer} alt="timer"></img>
                    <span className="nav-desk__span">Time Clocking</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Clipboard} alt="clipboard"></img>
                    <span className="nav-desk__span">Log Book</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Check} alt="check mark"></img>
                    <span className="nav-desk__span">Tasks</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Smile} alt="smiley face"></img>
                    <span className="nav-desk__span">Engage</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Graph} alt="graph"></img>
                    <span className="nav-desk__span">Reports</span>
                </div>
                <div className="nav-desk__comp">
                    <img className="nav-desk__icon" src={Chevron} alt="down arrow"></img>
                    <span className="nav-badge">1</span>
                    <span className="nav-desk__span">More</span>
                </div>
            </nav>
            <div className="header-desk__right">
                <img className="header-desk__img" src={Magnify} alt="magnifying glass"></img>
                <img className="header-desk__img" src={Megaphone} alt="megaphone"></img>
                <img className="header-desk__img" src={Chatbubble} alt="chat bubble"></img>
                <img className="header-desk__avatar" src={Avatar} alt="avatar"></img>
                <img className="shifts" src={shiftsLogo} alt="7shifts"></img>
            </div>
        </header>
    )
}

export default DesktopHeader