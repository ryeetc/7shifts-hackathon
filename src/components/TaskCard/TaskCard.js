import './TaskCard.scss';
import communication from '../../assets/images/communication.svg';
import blurredOne from '../../assets/images/blurred-1.svg';
import blurredTwo from '../../assets/images/blurred-2.svg';


function TaskCard() {
 
  return (
    <div className='card__section'>
      <div className='card'><img className='card__img'src={communication} alt="communication skills" /></div>
      <div className='card'><img className='card__img' src={blurredOne} alt="blurred" /></div>
      <div className='card'><img className='card__img' src={blurredTwo} alt="blurred2" /></div>
      {/* <div className='card'><img className='card__img' src={communication} alt="blurred communication" /></div> */}
    </div>
  )
}

export default TaskCard