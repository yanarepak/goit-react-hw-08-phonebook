import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const  isLoggedIn  = useSelector(state => state.auth.isLoggedIn)
  // const isRefreshing = useSelector(state => state.auth.isRefreshing)
  console.log(isLoggedIn)
//   console.log(isRefreshing)
// const shouldRedirect = !isLoggedIn && !isRefreshing;
return isLoggedIn ? children : <Navigate to={redirectTo} /> ;
};

export default PrivateRoute;
