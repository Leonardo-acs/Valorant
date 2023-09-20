
import './HeaderMenu.scss';
import { Link } from 'react-router-dom';
import LogoValorant from "../../assets/icons8-valorant-96.svg";
import "../../index.css"
export default function HeaderMenu() {

    return (
        <header className="headerMenu">
            <div className='headerMenu-icon'>
                <Link to={'/'} >
                    <img src={LogoValorant} alt="LogoValorant" />
                </Link>
            </div>
            <div className="headerMenu-Container">
                <Link className='heanderMenu-Container--Agentes' to={'/'}>Agentes</Link>
                <Link className='heanderMenu-Container--Arsenal' to={'/arsenal'}>Arsenal</Link>
                <Link className='heanderMenu-Container--Mapas' to={'/mapas'}>Mapas</Link>
            </div>
        </header>

    )
}