import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

 const PublicRoute = ({ children, redirectTo = '/',  }) => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn)
  const redirect = isLoggedIn 
  return redirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;