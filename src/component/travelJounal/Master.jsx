import React from "react";
import tripData from "./tripData";
import TravelNav from "./TravelNav";
import TravelCard from "./TravelCard";

export default function Master() {
    const tripCard = tripData.map(e => {
        return(
        <TravelCard id={e.id} {...e}/>
        )
    });

    return (
        // media (width = 550px)
        <>
            <TravelNav />
            <div className="trip-card-container">
                {tripCard}
            </div>
        </>
    )
};
