import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const login = (token, userId, userName) => {
    setUserData({ token, userId, userName });
    navigate("/"); // Redirect to homepage after login
  };

  const logout = () => {
    setUserData(null);
    navigate("/login"); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
