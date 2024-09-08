import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./users/pages/HomePage";
import AddNewPlace from "./places/pages/AddNewPlace";
import UserDetail from "./users/pages/UserDetailsPage";
import PlaceDetails from "./places/pages/PlaceDetails";
import DataAuthentication from "./users/pages/Authenticate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authenticate" element={<DataAuthentication />} />
          <Route path="/places/new" element={<AddNewPlace />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/places/:id" element={<PlaceDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
