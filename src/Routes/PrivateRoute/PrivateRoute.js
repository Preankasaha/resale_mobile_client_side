import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

    //spinner for data loading
    if (loading) {
        return <Spinner></Spinner>

    }

    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>


};

export default PrivateRouter;