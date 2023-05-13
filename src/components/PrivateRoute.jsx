import { useContext } from 'react';
import { AuthContext } from './access/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading)return <p className='w-fit mx-auto'>loading</p>
    else{
        if(user)return children;
        else return <Navigate to={'/login'} replace state={{from:location}}></Navigate>
    }
};

export default PrivateRoute;