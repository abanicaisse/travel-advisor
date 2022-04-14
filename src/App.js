import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [boundaries, setBoundaries] = useState({
    ne: {
      lat: 0.5077264679633942,
      lng: 32.80528619843784,
    },
    sw: {
      lat: 0.1476302962044258,
      lng: 32.37681940156267,
    },
  });

  // user live location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lng: longitude, lat: latitude });
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(boundaries.ne, boundaries.sw).then((data) => {
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="layout">
        <List className="list" places={places} />
        <Map
          className="map"
          setCoordinates={setCoordinates}
          setBoundaries={setBoundaries}
          coordinates={coordinates}
        />
      </main>
    </>
  );
};

export default App;
