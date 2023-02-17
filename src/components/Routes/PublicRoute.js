import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const RestrictedRoute = ({ children, redirectTo = '/', restricted = false }) => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn)
  const redirect = isLoggedIn && restricted
  return redirect ? <Navigate to={redirectTo} /> : children;
};