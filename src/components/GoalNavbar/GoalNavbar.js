import React from 'react'
import './GoalNavbar.scss';

import chatIcon from "../../assets/icons/chat.png"

import personIcon from "../../assets/icons/person.png"
import dryburger from "../../assets/icons/dryburger.png"
import award from "../../assets/icons/award.png"
import {Link} from 'react-router-dom'

function GoalNavbar() {
  return (
   <nav className='goal-navigation'>
    <ul className='goal-navigation__list'>
      <Link to='/'  className="goal-navigation__item"><img src={dryburger} alt="logo icon"/></Link>
      <Link to='/'  className="goal-navigation__item"><img src={award} alt="badge icon" /></Link>
      <Link to ='/' className="goal-navigation__item"><img src={chatIcon} alt="chat icon" /></Link>
      <Link to ='/' className="goal-navigation__item"><img src={personIcon} alt="person icon" /></Link>
    </ul>
   </nav>
  )
}

export default GoalNavbar