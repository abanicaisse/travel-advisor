import React, { useRef, useEffect, useState, useCallback } from "react";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import MapGL from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWJhbmljYWlzc2UiLCJhIjoiY2wxd2c1dDBiMGoxbzNqbXB5cnM5MnVmYSJ9.71nMVRD5jfI31jpPEyaimg";

const Map = ({ setCoordinates, setBoundaries, coordinates }) => {
  const mapRef = useRef(null);

  const [viewState, setViewState] = useState({
    zoom: 14,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewState({
        ...viewState,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });

    setCoordinates({ lng: viewState.longitude, lat: viewState.latitude });
  }, []);

  return (
    <div className="mapContainer">
      <MapGL
        ref={mapRef}
        {...viewState}
        mapboxAccessToken={MAPBOX_TOKEN}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      />
    </div>
  );
};

export default Map;
