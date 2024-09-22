import { Link } from "react-router-dom";

import "./HeaderNavigation.css";

const HeaderNavigation = () => {
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
          <li id="my-palces">
            <Link to="users/1">MY PLACES</Link>
          </li>
          <li id="add-palce">
            <Link to="places/new">ADD PLACE</Link>
          </li>
          <li id="authenticate">
            <Link to="/auth">MY PLACES</Link>
          </li>
          <li id="logout">
            <button id="logout-button">LOGOUT</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default HeaderNavigation;
