import React, { useState, useEffect } from "react";
import PlaceDetails from "../../places/pages/PlaceDetails";

function UserDetail() {
  const [placeLists, setPlaceLists] = useState([
    {
      id: "p4",
      title: "Central Park",
      description: "A vast green oasis in the heart of New York City.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1698319452867-c94f9eade87a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "New York, NY 10024",
      location: {
        lat: 40.785091,
        lng: -73.968285,
      },
      creator: "u2",
    },
    {
      id: "p6",
      title: "Times Square",
      description:
        "The bustling commercial and entertainment hub of New York City.",
      imageUrl:
        "https://images.unsplash.com/photo-1601139677490-2b3144da51a4?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "Manhattan, NY 10036",
      location: {
        lat: 40.758896,
        lng: -73.98513,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most famous skyscrapers in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u2",
    },
    {
      id: "p3",
      title: "Statue of Liberty",
      description: "A symbol of freedom and democracy in the United States.",
      imageUrl:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "Liberty Island, New York, NY 10004",
      location: {
        lat: 40.689247,
        lng: -74.044502,
      },
      creator: "u1",
    },
    {
      id: "p5",
      title: "Brooklyn Bridge",
      description: "One of the oldest suspension bridges in the United States.",
      imageUrl:
        "https://images.unsplash.com/26/city-scape.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: "Brooklyn Bridge, New York, NY 10038",
      location: {
        lat: 40.706086,
        lng: -73.996864,
      },
      creator: "u1",
    },
  ]);
  return (
    <div>
      <PlaceDetails items={placeLists} />
    </div>
  );
}

export default UserDetail;
