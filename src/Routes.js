import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderMenu from "./pages/HeaderMenu/HeaderMenu";
import Agentes from "./pages/Agentes/agentes";
import Agente from "./pages/Agente/agente";
import Arsenal from "./pages/Arsenal/arsenal";
import Home from "./pages/Home/Home";
import Mapas from "./pages/Mapas/mapas";


export default function RoutesApp() {
    return (
        <BrowserRouter>
            <HeaderMenu />
            <Routes>
                {/* <Route path='/' element={<Home />} /> */}
                <Route path="/" element={<Agentes />} />
                <Route path="agentes/:nomeAgente" element={<Agente />} />
                <Route path="/arsenal" element={<Arsenal />} />
                <Route path="/mapas" element={<Mapas />} />
            </Routes>
        </BrowserRouter>
    )
}