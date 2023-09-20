import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './mapas.scss';

export default function Mapas() {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        axios.get('https://valorant-api.com/v1/maps')
            .then((response) => {
                setMaps(response.data.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, []);

    return (
        <div className="maps-container">
            {maps?.map((map, index) => {
                return (
                    <div className="maps-wrapped" key={map.uuid}>
                        {console.log(map)}
                        <h1 className="map-name">{map?.displayName}</h1>
                        <img
                            src={map?.splash}
                            alt={map.displayName}
                            loading="lazy"  
                            className="map-image"
                        ></img>
                    </div>
                )
            })}
        </div>
    )
}