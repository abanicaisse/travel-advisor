import React, {useEffect, useState} from "react";

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"

import { getPlacesData } from "./api";


const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [boundaries, setBoundaries] = useState({});


    console.log(coordinates, boundaries)

    useEffect(() => {
        getPlacesData()
            .then(data => {
                console.log(data)
                setPlaces(data);
            })
    }, [])

    return (
        <>
            <Header />
            <main className="layout">
                <List className="list"/>
                <Map className="map"
                    setCoordinates={setCoordinates}
                    setBoundaries={setBoundaries}
                    coordinates={coordinates}
                />
            </main>
        </>
    )
}

export default App;