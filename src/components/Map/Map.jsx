import React, { useRef, useEffect, useState } from "react";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

// Mapbox component to load the Map
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJhbmljYWlzc2UiLCJhIjoiY2t6eG1nN3BrMDI0cTJucDk2aWxoMm13ciJ9.MiOa2FmEfZ5_3YW9xcdjrg";

const Map = ({ setCoordinates, setBoundaries, coordinates }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const coords = { lat: 0, lng: 0 };
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    const loadMap = async () => {
      await coordinates;

      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [coordinates.lng, coordinates.lat],
        zoom: zoom,
      });
    };
    loadMap();
  });

  return <div ref={mapContainer} className="mapContainer"></div>;
};

export default Map;
