import React from "react";

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"


const App = () => {
    return (
        <>
            <Header />
            <main className="layout">
                <List className="list"/>
                <Map className="map"/>
            </main>
        </>
    )
}

export default App;