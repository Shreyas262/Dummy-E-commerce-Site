import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../app-store/slice/authSlice";


function EditProfileModal({ isOpen, onClose }) {

    const user = useSelector(state => state.auth.user);
    const [updatedUserState, setUpdatedUserState] = useState(user)
    const [error, setError] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        if (isOpen && user) {
            setUpdatedUserState(user);
            setError("");
        }
    }, [isOpen, user]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (error) {
            setError("");
        }
        setUpdatedUserState(prev => ({ ...prev, [name]: value }));
    }
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const confirmEdit = window.confirm("Apply changes to your profile?")
        if (confirmEdit) {
            dispatch(updateUser(updatedUserState));
            onClose();
        }
    }

    if (!isOpen) return null;
    return (
        <div className='edit-profile-overlay' >
            <div className="edit-profile-modal">

                <div className="modal-header">
                    <h2>Edit Profile</h2>
                    <button
                        onClick={onClose}
                        type="button"
                        className="modal-close-btn"
                    >
                        &times;
                    </button>
                </div>

                <form className="edit-profile-form" onSubmit={handleFormSubmit}>
                    <div className="modal-body">

                        <label htmlFor="userFirstName">First Name: </label>
                        <input
                            type="text"
                            name="firstName"
                            id="userFirstName"
                            placeholder="Change your first name"
                            value={updatedUserState.firstName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="userLastName">Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            id="userLastName"
                            placeholder="Change your last name"
                            value={updatedUserState.lastName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="userPhone">Phone Number: </label>
                        <input
                            type="text"
                            name="phone"
                            id="userPhone"
                            placeholder="e.g. 9876543210"
                            inputMode="numeric"
                            pattern="^[0-9]*$"
                            maxLength="10"
                            minLength="10"
                            value={updatedUserState.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="modal-footer">
                        <button
                            type="submit"
                            className="button"
                        >
                            Save
                        </button>

                        <button
                            type="button"
                            className="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditProfileModal
