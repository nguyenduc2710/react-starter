import React, { useState, useEffect } from "react";

export default function Component1() {
    const [starWarsData, setStarWarsData] = useState();

    const getApi = async () => {
        const response = await fetch("https://swapi.dev/api/films/").then(response => response.json());
        setStarWarsData(response);
    }

    useEffect(() => {
        getApi();
    }, []);

    const displayData = starWarsData.map(item => {
        <div>
            <title>{item.title}</title>
            <div>Episode: {item.episode_id}</div>
            <div>Director: {item.director}</div>
            <div>Release date: {item.release_date}</div>
        </div>
    })

    // fetch("https://swapi.dev/api/films/")
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    return (
        <div>
            {starWarsData && { displayData }}
        </div>
    )


} 