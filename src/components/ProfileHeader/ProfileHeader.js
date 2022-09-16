import './ProfileHeader.scss'
import arrowIcon from "../../assets/icons/arrow-left.png";
import {Link} from 'react-router-dom';


function GoalHeader() {
  return (
    <main className='profile-header'>
      <Link to='/profile'><img className ="profile-header__arrow"src={arrowIcon} alt="arrow" /></Link>
      <h1 className='profile-header__header'>Dashboard</h1>
    </main>

  )
}

export default GoalHeader