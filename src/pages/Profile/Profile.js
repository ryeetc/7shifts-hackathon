import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar';
import './Profile.scss';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileButtons from '../../components/ProfileButtons/ProfileButtons';
import {Link} from 'react-router-dom';



function Profile() {
  return (
    <>
      <ProfileHeader />
      <ProfileButtons />
      <main className='profile'>
      <Link to='/milestone'><div className= "box box-4"></div></Link>
      </main>
      <ProfileNavbar />
     </>
   
  )
}

export default Profile