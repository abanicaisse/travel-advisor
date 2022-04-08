import React, {useState} from "react"

import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List = () => {
    const [type, setType] = useState("restaurant")
    const [rating, setRating] = useState("")

    const places = [
        {name: "cool place"},
        {name: "Best Beer"},
        {name: "Best Steak"},
        {name: "Cool Place"},
        {name: "Best Hotel"},
        {name: "Great Pool"},
        {name: "Mystic Gym"},
        {name: "Best Steak"},
        {name: "Best Steak"}
    ]

    return (
        <div className="listContainer">
            <h4>Restaurants, Hotels & Attractions around you</h4>
            <div className="forms">
                <form action="" className="formControl">
                    <legend>Type</legend>
                    <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="restaurant">Restaurant</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </form>
                <form action="" className="formControl">
                    <legend>Ratings</legend>
                    <select name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value={0}>all</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>
            </div>

            <div className="placeDisplayer">
                {places?.map((place, i) => (
                    <div key={i} className="placeCard"> 
                        <PlaceDetails 
                            place={place}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List;