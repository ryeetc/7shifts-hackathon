import './ProfileButtons.scss'

function ProfileButtons() {
  return (
  <div className="profile-button__container">
    <button className="profile-button orange__button">Map View</button>
    <button className="profile-button grey__button">List View</button>
   </div>
  )
}

export default ProfileButtons