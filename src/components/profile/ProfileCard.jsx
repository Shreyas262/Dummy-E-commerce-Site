import { useSelector } from "react-redux";
import { useState } from "react";
import profileImage from "../../assets/images/user-avatar.png"

function ProfileCard({onEdit}) {

  const user = useSelector(state => state.auth.user);

  if (!user) return (
    <div className="profile-card card">

      <img
        src={profileImage}
        alt="Profile Avatar"
        className="profile-avatar"
      />
    </div>
  )

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

      <button
        className='button'
        onClick={onEdit}
      >
        Edit profile
      </button>

    </div>
  );
}

export default ProfileCard;