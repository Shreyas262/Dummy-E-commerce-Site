import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <button
            type="button"
            className="button logout-btn"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}

export default LogoutButton;