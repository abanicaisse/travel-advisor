import React from "react"

import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

const Map = () => {
    const coordinates = {lat: 0, lng: 0}

    return (
            <div className="mapContainer">
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyDp4f9HB1SGwDlUx1T99eZzEnT-Dyl4-zg"}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={""}
                    onChange={""}
                    onChildClick={""}
                >
                    
                </GoogleMapReact>
            </div>
        )
}

export default Map;