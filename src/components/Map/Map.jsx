import React from "react"

import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

const Map = ({setCoordinates, setBoundaries, coordinates}) => {
    // const coordinates = {lat: 0, lng: 0}

    return (
            <div className="mapContainer">
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyBhXfF6pSP6bIMJjTSJtEKwjTCMrwRK5Gs"}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={""}
                    onChange={(e) => {
                        setCoordinates({lat: e.center.lat, lng: e.center.lng});
                        setBoundaries({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                    }}
                    onChildClick={""}
                >

                </GoogleMapReact>
            </div>
        )
}

export default Map;