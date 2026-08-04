import { useSelector } from "react-redux";
import profileImage from "../../assets/images/user-avatar.png"

function ProfileCard() {

  const user = useSelector(state => state.auth.user);

  if(!user) return null

  return (
    <div className="profile-card card">

      <img
        src={profileImage}
        alt="Profile Avatar"
        className="profile-avatar"
      />

      <h2>{ user.firstName } { user.lastName }</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>

    </div>
  );
}

export default ProfileCard;