import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../components/Contexts/UserAuthContext"


const ProtectedRoute = ({children}) => {
    const { user } = useUserAuth();

    // console.log('check user in private', user);

    if(!user || !user.uid) return <Navigate to={"/login"} replace/>;
    return children;
}

export default ProtectedRoute;