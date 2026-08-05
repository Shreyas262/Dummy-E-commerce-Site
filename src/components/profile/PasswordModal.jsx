import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app-store/slice/authSlice";

const createEmptyPasswordState = () => ({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
})

function PasswordModal({onClose, isOpen}) {
    if (!isOpen) return null;

    const [passwordState, setPasswordState] = useState(createEmptyPasswordState());
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.auth.user);
    if (!user) return null;

    useEffect(() => {
        if (isOpen) {
            setPasswordState(createEmptyPasswordState());
            setError("");
        }
    }, [isOpen]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (error) {
            setError("");
        }
        setPasswordState(prev => ({ ...prev, [name]: value }));
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const newPassword = passwordState.newPassword
        
        if (passwordState.currentPassword !== user.password) {
            setError("Invalid current password")
            return;
        }

        if (passwordState.newPassword === passwordState.currentPassword) {
            setError("New password cannot be same as your current password")
            return;
        }

        if (passwordState.newPassword !== passwordState.confirmPassword) {
            setError("Passwords do not match")
            return;
        }
        
        if (!window.confirm("Are you sure you want to change your password?")
        ) {
            return;
        }
        dispatch(updateUser({ password: newPassword }))
        setPasswordState(createEmptyPasswordState())
        setError("")
        onClose();
        
    }

    return (
        <div className="password-modal-overlay">
            <div className="password-modal">
                
                <div className="modal-header">
                    <h2>Change Password</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handlePasswordSubmit} className="password-form">
                    {error && <p className="form-error">{error}</p>}
                    <div className="modal-body">

                        <label htmlFor="current-password">Current password: </label>
                        <input
                            type="password"
                            name="currentPassword"
                            id="current-password"
                            placeholder="Enter your current password"
                            minLength="8"
                            value={passwordState.currentPassword}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="new-password">New password: </label>
                        <input
                            type="password"
                            name="newPassword"
                            id="new-password"
                            placeholder="Enter a new password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            minLength="8"
                            value={passwordState.newPassword}
                            onChange={handleChange}
                            required
                        />
                        <p className="password-help">
                            Password must be at least 8 characters and
                            include an uppercase letter, a lowercase letter, a number, and a special character.
                        </p>

                        <label htmlFor="confirm-password">Confirm Password: </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirm-password"
                            placeholder="Confirm your new password"
                            value={passwordState.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="modal-footer">
                        <button
                            type="submit"
                            className="button"
                        >
                            Save Password
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

export default PasswordModal
