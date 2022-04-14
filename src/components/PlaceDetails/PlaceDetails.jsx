import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

const PlaceDetails = ({ place }) => {
  return (
    <>
      <div className="card-img">
        <img
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80"
          }
          alt={`${place.name}`}
        />
      </div>
      <div className="card-content">
        <h2 className="place-name">{place.name}</h2>
        <div className="place-price">
          <h4>Price</h4>
          <h4 style={{ marginBottom: ".5rem" }}>{place.price_level}</h4>
        </div>

        <div className="place-ranking">
          <h4>Ranking</h4>
          <h4 style={{ marginBottom: ".5rem" }}>{place.ranking}</h4>
        </div>

        <div className="place-awards">
          {place?.awards?.map((award, i) => (
            <div key={i} className="award">
              <img src={award.images.small} alt={award.display_name} />
              <p>{award.display_name}</p>
            </div>
          ))}
        </div>

        <div className="place-cuisine">
          {place?.cuisine?.map(({ name }) => (
            <p key={name} className="cuisine-chip">
              {name}
            </p>
          ))}
        </div>

        {place?.address && (
          <p className="place-address">
            <LocationOnIcon /> {place.address}
          </p>
        )}

        {place?.phone && (
          <p className="place-phone">
            <PhoneIcon /> {place.phone}
          </p>
        )}

        <div className="actions">
          <button onClick={() => window.open(place.web.url, "_blank")}>
            Trip Advisor
          </button>
          <button onClick={() => window.open(place.website, "_blank")}>
            Website
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceDetails;
