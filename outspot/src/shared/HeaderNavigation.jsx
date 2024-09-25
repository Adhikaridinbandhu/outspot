import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";

import "./HeaderNavigation.css";

const HeaderNavigation = () => {
  const { userData, logout } = useContext(AuthContext);
  return (
    <header className="main-header">
      <h1 className="main-navigation__title">
        <Link to="/">OutSpot</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <ul className="nav-links">
          <li>
            <Link to="/">ALL USERS</Link>
          </li>
          {userData && (
            <li id="my-palces">
              {/* Access userId for the link */}
              <Link to={`users/${userData.userId}`}>MY PLACES:</Link>
            </li>
          )}
          {userData && (
            <li id="add-palce">
              <Link to="places/new">ADD PLACE</Link>
            </li>
          )}
          {!userData && (
            <li id="authenticate">
              <Link to="/auth">AUTHENTICATION</Link>
            </li>
          )}
          {userData && (
            <li id="logout">
              <button id="logout-button" onClick={logout}>
                LOGOUT
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
