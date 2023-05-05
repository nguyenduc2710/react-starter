import React from "react";
import data from "./data";
import AirBnbNav from "./AirBnbNav";
import AirBnbBody from "./AirBnbBody";
import TripCard from "./TripCard";

export default function Master() {
    const tripInfo = data.map(e => {
        return (
            <TripCard
                id={e.id}
                item={e}
            />
        )
    })

    return (
        <div className="wrapper">
            <div className="air-bnb-project">
                <AirBnbNav />
                <AirBnbBody />
                <div className="trip-container d-flex">
                    {tripInfo}
                </div>
            </div>
        </div>
    )
};
