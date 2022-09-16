import './TaskCard.scss';
import blurredOne from '../../assets/images/image-2.png';
import blurredTwo from '../../assets/images/image-3.png';
import successImage from '../../assets/images/Component-4.svg';


function TaskCard() {
 
  return (
    <div className='card__section'>
      <div className='card'><img className='card__img card-success'src={successImage} alt="communication skills" /></div>
      <div className='card'><img className='card__img' src={blurredOne} alt="blurred" /></div>
      <div className='card'><img className='card__img' src={blurredTwo} alt="blurred2" /></div>
      {/* <div className='card'><img className='card__img' src={communication} alt="blurred communication" /></div> */}
    </div>
  )
}

export default TaskCard