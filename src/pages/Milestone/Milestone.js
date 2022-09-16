
import GoalNavbar from '../../components/GoalNavbar/GoalNavbar'
import TaskCard from '../../components/TaskCard/TaskCard'
import './Milestone.scss'
import arrowIcon from "../../assets/icons/arrow-left.png";
import {Link} from 'react-router-dom';


function Milestone() {
  return (
    <main className="milestone">
    <div className='goal-header'>
      <Link to='/profile'><img className ="goal-header__arrow"src={arrowIcon} alt="arrow" /></Link>
      <h3 className='goal-header__header'>My Goal</h3>
    </div>
      <div className="milestone-container">
      <h2 className="milestone__subheader">Improve Communication Skills</h2>
      </div>
      <TaskCard />
      <GoalNavbar />
    </main>

  )
}

export default Milestone