import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(userContext);
    const location = useLocation()

    if(loading){
        return <h1 className='text-4xl text-center'>Loading...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;