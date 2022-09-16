import React from 'react'
import './Navbar.scss';
import badgeIcon from "../../assets/icons/badge.png"
import chatIcon from "../../assets/icons/chat.png"
import logoIcon from "../../assets/icons/logoIcon.png"
import personIcon from "../../assets/icons/person.png"
import {Link} from 'react-router-dom'

function Navbar() {
  return (
   <nav className='navigation'>
    <ul className='navigation__list'>
      <Link to='/'  className="navigation__item"><img src={logoIcon} alt="logo icon"/></Link>
      <Link to='/'  className="navigation__item"><img src={badgeIcon} alt="badge icon" /></Link>
      <Link to ='/' className="navigation__item"><img src={chatIcon} alt="chat icon" /></Link>
      <Link to ='/' className="navigation__item"><img src={personIcon} alt="person icon" /></Link>
    </ul>
   </nav>
  )
}

export default Navbar