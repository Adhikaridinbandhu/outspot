import React from "react";
import "./PlaceDetails.css";

const PlaceDetails = ({ items }) => {
  const deleteHandler = (id) => {
    console.log("Deleting id", id);
  };

  if (items.length < 1) {
    return <div>No data found</div>;
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <li key={place.id} className="place-item">
          <div className="place-item__image">
            <img src={place.imageUrl} alt={place.title} />
          </div>
          <div className="place-item__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item__actions">
            <button onClick={() => deleteHandler(place.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default PlaceDetails;
