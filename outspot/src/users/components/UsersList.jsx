import { Link } from "react-router-dom";
import "./UsersList.css";

const UsersList = ({ users }) => {
  return (
    <div>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="card user-item__content">
              <Link to={`users/${user.id}`}>
                <div className="user-item__image">
                  <img
                    src={user.image}
                    alt={user.name}
                    width="50"
                    height="60"
                  />
                </div>
                <div className="user-item__info">
                  <h2>{user.name}</h2>
                  <h3>
                    {user.places} {user.places === 1 ? "Place" : "Places"}
                  </h3>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
