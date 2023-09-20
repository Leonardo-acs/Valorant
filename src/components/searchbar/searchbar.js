import { useState } from "react";
import axios from 'axios';
export default function SearchBar({ onSearch }) {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchText);
    };

    async function fetchMatches(playerName) {
        axios.get(`https://api.valorant.com/v1/matches?playerName=${searchText}`, {
            headers: {
                'X-Riot-Token': 'RGAPI-c46a978a-4abf-4bac-af4d-1dd6ce5860a9',
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        })
        // const response = await fetch(`https://api.valorant.com/v1/matches?playerName=${searchText}`, {
        //   headers: {
        //     'X-Riot-Token': 'RGAPI-c46a978a-4abf-4bac-af4d-1dd6ce5860a9',
        //   },
        // });

        // const data = await response.json();
        // const matches = data.data.map((match) => ({
        //   id: match.matchId,
        //   date: match.gameStartTime,
        //   map: match.map,
        //   mode: match.gameMode,
        // }));

        // return matches;
    }


    return (
        console.log(searchText),
        <div className="search-bar">
            <input
                type="text"
                placeholder="Digite o nome do jogador"
                value={searchText}
                onChange={handleInputChange}
            />
            <button onClick={fetchMatches}>Pesquisar</button>
        </div>
    );
}