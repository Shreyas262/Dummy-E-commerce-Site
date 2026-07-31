import profileImage from "../../assets/images/user-avatar.png"

function ProfileCard() {
  return (
    <div className="profile-card card">
      <img
        src={profileImage}
        alt="Profile Avatar"
        className="profile-avatar"
      />

      <h2>John Doe</h2>

      <p>john.doe@example.com</p>
    </div>
  );
}

export default ProfileCard;