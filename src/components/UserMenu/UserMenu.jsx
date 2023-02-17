import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/operation/userOperation';

const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
