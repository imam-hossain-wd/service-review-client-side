import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(userContext);
    const location = useLocation()

    if(loading){
        // return <h1 className='text-4xl text-center'>Loading...</h1>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;