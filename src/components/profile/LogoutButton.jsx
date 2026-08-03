import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app-store/slice/authSlice";

function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
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