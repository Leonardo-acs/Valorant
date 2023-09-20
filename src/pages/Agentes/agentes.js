import React, { useEffect, useState } from "react";
import axios from 'axios';
import './agentes.scss';
import { Link } from 'react-router-dom';


export default function Agentes() {
    const [agents, setAgents] = useState([]);
    const [agentsFilteredsList, setAgentsFilteredsList] = useState([])

    useEffect(() => {
        loadAgents();
    }, []);

    function loadAgents() {
        axios.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')
            .then(response => {
                setAgents(response.data.data);
                setAgentsFilteredsList(response.data.data);
            })
            .catch(error => console.log(error))
    }

    function selectAgentRole(role) {
        if (role === "Todos") {
            return setAgentsFilteredsList(agents);
        }

        const agentsFiltereds = agents.filter((agent) => {
            return agent.role.displayName === role;

        });

        return setAgentsFilteredsList(agentsFiltereds);
    }

    function renderAgents() {
        return (
            agentsFilteredsList?.map(agent => (
                <Link to={`/agentes/${agent.uuid}`} className="agentButton" state={agent} key={agent.uuid} >
                    <img src={agent?.displayIconSmall} alt={agent.displayName} className="agentImage" loading="lazy" />
                    <span>{agent?.displayName}</span>
                </Link>
            ))
        );
    }

    return (
        <div className="agentesContainer">
            {/* <div className="agentesContainer-filter">
                <ul className="agentsContainer-filter-list">
                    <li onClick={() => selectAgentRole("Todos")}>Todos</li>
                    <li onClick={() => selectAgentRole("Controlador")}>Controladores</li>
                    <li onClick={() => selectAgentRole("Duelista")}>Duelistas</li>
                    <li onClick={() => selectAgentRole("Iniciador")}>Inicadores</li>
                    <li onClick={() => selectAgentRole("Sentinela")}>Sentinelas</li>
                </ul>
            </div> */}
            <div className="agentWrapper">
                {renderAgents()}
            </div>
        </div>
    )
}