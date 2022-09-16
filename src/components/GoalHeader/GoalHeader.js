import './GoalHeader.scss'
import arrowIcon from "../../assets/icons/arrow-left.png";
import {Link} from 'react-router-dom';


function GoalHeader() {
  return (
    <main className='goal-header'>
      <Link to='/profile'><img className ="goal-header__arrow"src={arrowIcon} alt="arrow" /></Link>
      <h1 className='goal-header__header'>My Goal</h1>
    </main>

  )
}

export default GoalHeader