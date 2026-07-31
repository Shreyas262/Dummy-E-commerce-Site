import ProfileCard from "../../components/profile/ProfileCard"
import ProfileInfo from "../../components/profile/ProfileInfo"
import LogoutButton from "../../components/profile/LogoutButton"
import './profile.css'

function Profile() {

    return (
        <section className="profile-section">
      
            <div className="profile-container">
            
                <ProfileCard
                    name="John Doe"
                    email="john.doe@example.com"
                />
                
                <ProfileInfo />
                <LogoutButton />

            </div>

        </section>
    )
}

export default Profile
