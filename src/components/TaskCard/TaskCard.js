import './TaskCard.scss';
import communication from '../../assets/images/communication.svg'
import {useState} from 'react';






function TaskCard() {
  const [accomplished, setAccomplished] = useState(false)
  function handleAccomplished () {
    setAccomplished(true)
    console.log("hi")
  }
  return (
    <div className='card__section'>
      <div className='card'>
        <img className='' 
         src={communication}
         alt="communication skills"
         onClick={handleAccomplished}  />
      </div>
      {accomplished && <div className='card'><img className='card__img card__image--selected' src={communication} alt="communication skills" /></div>}
      <div className='card'><img className='card__img' src={communication} alt="communication skills" /></div>
      <div className='card'><img className='card__img' src={communication} alt="communication skills" /></div>
    </div>
  )
}

export default TaskCard