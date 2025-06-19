import { useAuth } from "../components/AuthContext";


const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        window.location.href = "https://marketing-platform-sigma.vercel.app/";
        return null;
    }
    return children;
};

export default ProtectedRoute;
