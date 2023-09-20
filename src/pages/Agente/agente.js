import { useLocation } from 'react-router-dom';
import './agente.scss';
import AgentSkills from '../../components/agentSkills/agentSkills';

export default function Agente(props) {
    const { state } = useLocation();
    return (
        <div className='agentInfosContainer'>
            <div className='agentInfos'>
                <img src={state?.background} alt='agentes imagem'></img>
                <div className='agenteInfos-agentImage'>
                    <img src={state?.fullPortrait} alt='agente retrato'></img>
                </div>
            </div>
            <div className='agentInfosRole-role'>
                <div className='agentInfos-Role-Infos'>
                    <h2>{state?.role.displayName}</h2>
                    <img src={state?.role.displayIcon} alt='função icone'></img>
                </div>
                <h1>{state?.displayName}</h1>
                <div className='agentInfos-Skills'>
                    <AgentSkills
                        abilities={state.abilities}
                        description={state.description}
                        descriptionIcon={state.role.displayIcon}
                    >
                    </AgentSkills>

                </div>
            </div>


        </div>
    )
}