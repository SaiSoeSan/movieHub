import * as authService from '../LoginSignup/AuthService'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const location = useLocation();

    if(authService.isLoggedIn()){
        return children;
    }else{
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
}

export default ProtectedRoute;