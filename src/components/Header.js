import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store/index'; // Import logOut action

import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(logOut()); // Dispatch the logOut action
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuthenticated && (
          <nav>
            <ul>
              <li>
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={logOutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
        )
      }
    </header>
  );
};

export default Header;
