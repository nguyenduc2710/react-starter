import React from "react";

export default function TravelCard(props) {
    return (
        <div className="content">
            <div className="travel-card-container d-flex">
                <div className="trip-img-container">
                    <img src={`imgs/travelJournal/${props.image_name}`} alt="trip-img" className="trip-img" />
                </div>
                <div className="trip-info-container d-flex">
                    <div className="trip-location">
                        <img className="location-icon" src="imgs/travelJournal/locationIcon.png" />
                        <span className="trip-location-place">
                            {props.trip_location}
                        </span>
                        <span className="grey underline">View on Google Maps</span>
                    </div>
                    <div className="trip-name">
                        {props.trip_name}
                    </div>
                    <div className="trip-date">
                        {props.trip_date}
                    </div>
                    <div className="trip-description">
                        {props.trip_description}
                    </div>
                </div>
            </div>
        </div>
    );
};
