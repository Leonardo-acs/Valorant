
import { useState } from 'react';
import './agentSkills.scss'
export default function AgentSkills(props) {
    const { abilities, description, descriptionIcon } = props;
    const [showDescription, setShowDescription] = useState(description);
    function switchAbilityButton(ability) {
        let button = ''
        console.log(ability)
        switch (ability.slot) {
            case "Ability1":
                button = 'Q';
                break;
            case "Ability2":
                button = 'E';
                break;
            case "Grenade":
                button = 'C';
                break;
            case "Ultimate":
                button = 'X';
                break;
            case "Passive":
                button = 'PASSIVA';
                break;
            default:
                break;
        }
        return button;
    }
    return (
        <div className="abilities-container">
            <div className='abilites'>
                <button className='abilities-info-button' onClick={() => setShowDescription(description)}>
                    <span>INFO</span>
                    <hr></hr>
                    <img src={descriptionIcon} alt='info-icon'></img>
                </button>
                {abilities?.map((ability, index) => (
                    < button key={index} className="abilities-info-button" onClick={() => setShowDescription(ability.description)}>
                        <span> {switchAbilityButton(ability)}</span >
                        <hr></hr>
                        <img src={ability.displayIcon} alt={ability.displayName} className='abilities-image' />
                    </button>
                ))}
                <p className='abilities-container-descripiton'>{showDescription}</p>
            </div>
        </div>
    )
}