import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const  isLoggedIn  = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn)
//   console.log(isRefreshing)

  return isLoggedIn ? children : <Navigate to={redirectTo} />
};

export default PrivateRoute;
