import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import AuthContext from "./AuthContext"; // Import your AuthContext

const UserAuthentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLogin, setIsLogin] = useState(false);
  const { login } = useContext(AuthContext); // Use the login function from context

  const onSubmit = (data) => {
    const apiUrl = isLogin
      ? "http://localhost:5000/users/login"
      : "http://localhost:5000/users/register";

    axios
      .post(apiUrl, data)
      .then((response) => {
        if (isLogin) {
          const { token, userId, userName } = response.data;
          login(token, userId, userName); // Save user data in context and navigate
        } else {
          console.log("Registered successfully");
          setIsLogin(true); // Switch to login mode after registration
        }
      })
      .catch((error) => {
        console.error("Error during login/register:", error);
      });

    reset(); // Reset form after submission
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    reset(); // Reset the form when toggling between login and register
  };

  return (
    <div className="user-auth-form">
      <div className="form-wrapper">
        <div className="form-container">
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Register"}</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name field (only for registration) */}
            {!isLogin && (
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  {...register("fullName", { required: true, minLength: 3 })}
                />
                {errors.fullName && (
                  <span className="error-message">
                    Name is required (min 3 characters)
                  </span>
                )}
              </div>
            )}

            {/* Email field (for both login and register) */}
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                })}
              />
              {errors.email && (
                <span className="error-message">Enter a valid email</span>
              )}
            </div>

            {/* Password field (for both login and register) */}
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="error-message">
                  Password must be at least 6 characters
                </span>
              )}
            </div>

            {/* Submit button */}
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="button button--success">
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>

          {/* Switch between Login and Register */}
          <div className="text-center mt-4">
            <button onClick={toggleAuthMode} className="btn-switch-mode">
              {isLogin ? "Switch to Register" : "Switch to Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;
