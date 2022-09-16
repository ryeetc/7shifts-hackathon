import './ProfileNavbar.scss';
import badgeIcon from "../../assets/icons/badge.png";
import chatIcon from "../../assets/icons/chat.png";
import burger from "../../assets/icons/burger.png"
import personIcon from "../../assets/icons/person.png";
import {Link} from 'react-router-dom'

function ProfileNavbar() {
  return (
   <nav className='profile-navigation'>
    <ul className='profile-navigation__list'>
      <Link to='/milestone'  className="profile-navigation__item profile-navigation__burger"><img className="profile__burger" src={burger} alt="logo icon"/></Link>
      <Link to='/'  className="profile-navigation__item"><img src={badgeIcon} alt="badge icon" /></Link>
      <Link to ='/' className="profile-navigation__item"><img src={chatIcon} alt="chat icon" /></Link>
      <Link to ='/' className="profile-navigation__item"><img src={personIcon} alt="person icon" /></Link>
    </ul>
   </nav>
  )
}

export default ProfileNavbar