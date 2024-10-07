import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../components/Contexts/UserAuthContext"

const LogedInValidationRoute = ({ children }) => {
    const { user } = useUserAuth();

    if (!user || !user.uid) return children; // Check if user exists

    return <Navigate to={"/todo"} replace />;
};

export default LogedInValidationRoute;
