import React from "react";
import starIcon from "../../images/Star 1.png";

export default function TripCard(props) {
    return (
        <wrapper className="trips-container d-flex">
            <div className="trip-card position-relative">
                <img className="trip-img" src={`../imgs/${props.item.coverImg}`} />
                <div className="trip-status position-absolute"
                >
                    {props.item.openSpots == 0 ? 'SOLD OUT' : props.item.location}
                </div>

                <div className="trip-des">
                    <div className="trip-rating">
                        <img src={starIcon} className="trip-rating-item"/>
                        <span className="trip-rating-item">{props.item.stats.rating}</span>

                        <span className="trip-rating-item grey">({props.item.stats.reviewCount})</span>
                        <span className="trip-rating-item grey">{props.item.country}</span>
                    </div>

                    <div className="trip-title">{props.item.title}
                    </div>
                    <div className="trip-price">
                        <span className="bold">From ${props.item.price}</span> / person
                    </div>
                </div>
            </div>            
        </wrapper>
    )
}