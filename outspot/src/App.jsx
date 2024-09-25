import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./users/pages/HomePage";
import AddNewPlace from "./places/pages/AddNewPlace";
import UserDetail from "./users/pages/UserDetailsPage";
import PlaceDetails from "./places/pages/PlaceDetails";
// import DataAuthentication from "./users/pages/Authenticate";
import UpdatePlace from "./places/pages/UpdatePlace";
import HeaderNavigation from "./shared/HeaderNavigation";
import UserAuthentication from "./users/pages/Authenticate";
import { AuthProvider } from "./AuthContext/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="app-header">
            <HeaderNavigation />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<UserAuthentication />} />
            <Route path="/places/new" element={<AddNewPlace />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/place/:id" element={<PlaceDetails />} />
            <Route path="/places/:id" element={<UpdatePlace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
