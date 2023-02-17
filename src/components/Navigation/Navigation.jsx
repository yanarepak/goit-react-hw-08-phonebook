import { Nav, Link } from './Navigation.styled.jsx';
import UserMenu from 'components/UserMenu/UserMenu.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors.js';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && (
          <>
            <Link to="/register">Registration</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </Nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Navigation;
