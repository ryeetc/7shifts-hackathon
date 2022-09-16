import DesktopHeader from "../../components/DesktopHeader/DesktopHeader";
import "./DesktopPage.scss"

const DesktopPage = () => {
    return (
        <>
            <DesktopHeader />
            <main className="main">
                <div className="back">
                    <img className="back__img"></img>
                    <span className="back__text">Back</span>
                </div>
                <h1 className="main__header">Employee Goals</h1>
                <nav className="main__nav">
                    <span className="main__nav--item">View</span>
                    <span className="main__nav--item">Manage</span>
                    <span className="main__nav--item">Team Goals</span>
                    <span className="main__nav--item">Restaurant Goals</span>
                    <span className="main__nav--item">Events</span>
                    <span className="main__nav--item">In Progress</span>
                    <span className="main__nav--item">Completed</span>
                </nav>
                <div className="card__headers">
                    <span className="card__headers--label">Employee</span>
                    <span className="card__headers--label">Status</span>
                    <span className="card__headers--label">Goal Status</span>
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
                        <div className="card__div">
                            <img className="card__div--img"></img>
                            <img className="card__div--img"></img>
                            <img className="card__div--img"></img>
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
                        <div className="card__div">
                            <img className="card__div--img"></img>
                            <img className="card__div--img"></img>
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
                        <div className="card__div">
                            <img className="card__div--img"></img>
                            <img className="card__div--img"></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__div">
                            <span className="card__div--span">Louise Belcher</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">In Progress</span>
                        </div>
                        <div className="card__div">
                            <span className="card__div--span">1/4</span>
                        </div>
                        <div className="card__div">
                            <img className="card__div--img"></img>
                            <img className="card__div--img"></img>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DesktopPage