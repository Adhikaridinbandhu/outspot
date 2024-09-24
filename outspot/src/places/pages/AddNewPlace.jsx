import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewPlace.css";

function AddPlace({ onAddPlace }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    image: null, // Store image file
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.title || formData.title.length < 6) {
      formErrors.title =
        "Title is required and should be at least 6 characters.";
    }
    if (!formData.description) {
      formErrors.description = "Description is required.";
    }
    if (!formData.address) {
      formErrors.address = "Address is required.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const placeData = new FormData();
    placeData.append("title", formData.title);
    placeData.append("description", formData.description);
    placeData.append("address", formData.address);
    if (formData.image) {
      placeData.append("image", formData.image);
    }

    // Mock API Call (or use axios to connect to backend)
    axios
      .post("http://localhost:5000/spots/add", placeData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Place added successfully:", response.data);
        onAddPlace(response.data); // Call parent handler to add place to list
        resetForm();
        navigate("/"); // Redirect to homepage or any other route
      })
      .catch((error) => {
        console.error("Error adding place:", error);
      });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      address: "",
      image: null,
    });
    setErrors({});
    document.getElementById("image").value = ""; // Manually reset file input
  };

  return (
    <div className="add-place-form">
      <div className="form-wrapper">
        <div className="form-container">
          <h2 className="text-center mb-4">Add New Place</h2>
          <form id="submissionForm" onSubmit={submitHandler}>
            <div className="form-group mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter title"
              />
              {errors.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows="3"
                placeholder="Enter description"
              ></textarea>
              {errors.description && (
                <span className="error-message">{errors.description}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder="Enter address"
              />
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                onChange={handleImageUpload}
                accept="image/*"
              />
            </div>
            <div className="form-group mt-3" style={{ textAlign: "center" }}>
              <button type="submit" className="button button--success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPlace;
