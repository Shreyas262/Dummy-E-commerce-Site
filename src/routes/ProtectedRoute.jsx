import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
    const isAuthenticated = useSelector(
        (state) => state.auth.isAuthenticated
    );

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/auth/login" replace />
    );
}

export default ProtectedRoute;