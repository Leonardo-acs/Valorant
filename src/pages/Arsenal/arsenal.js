import { useEffect, useState } from 'react';
import './arsenal.scss';
import axios from 'axios';

export default function Arsenal() {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        axios.get('https://valorant-api.com/v1/weapons?language=pt-BR')
            .then(response => {
                setWeapons(response.data.data)
            })
            .catch(error => console.log(error))

    }, []);

    return (
        <div className='weapons-container'>
            <div className='weapons-container-wrapper'>
                {
                    weapons?.map((weapon, index) => (
                        <div className='weapon'>
                            <h1 className='weapon-name'>{weapon?.displayName}</h1>
                            <img src={weapon?.displayIcon} alt={weapon?.displayName} loading="lazy" className='weapon-image'></img>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}