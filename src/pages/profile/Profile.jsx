import ProfileCard from "../../components/profile/ProfileCard"
import ProfileInfo from "../../components/profile/ProfileInfo"
import LogoutButton from "../../components/profile/LogoutButton"
import AddressSection from "../../components/profile/AddressSection"
import PasswordSection from "../../components/profile/PasswordSection"
import EditProfileModal from '../../components/profile/EditProfileModal'
import { useState } from "react"
import './profile.css'

function Profile() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <section className="profile-section">
      
            <EditProfileModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
            <div className="profile-container">
            

                <ProfileCard
                    onEdit={() => setIsModalOpen(true)}
                />
                <ProfileInfo />
                <AddressSection />
                <PasswordSection />
                <LogoutButton />
                    
            </div>

        </section>
    )
}

export default Profile
