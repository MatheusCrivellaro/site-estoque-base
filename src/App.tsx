import {Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/Inicio/Inicio'
import Financiamento from './pages/financiamento/Financiamento'
import Sobre from './pages/sobre-nos/Sobre'
import Veiculos from './pages/veiculos/Veiculos'
import Venda from './pages/venda/Venda'
import Footer from "./components/Footer/Footer.tsx";
import {useEffect, useState} from "react";
import FormConcluido from "./pages/form-concluido/FormConcluido.tsx";

function App() {

    const location = useLocation()

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 40) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname])

    return (
        <div className={`app ${location.pathname === "/veiculos" && "total-height"}`}>
            <NavBar />
            <div className={isSticky ? "div-routes" : ""}>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/veiculos" element={<Veiculos />} />
                    <Route path="/sobre-nos" element={<Sobre />} />
                    <Route path="/venda-seu-veiculo" element={<Venda />} />
                    <Route path="/financiamento" element={<Financiamento />} />
                    <Route path="form-concluido" element={<FormConcluido />} />
                </Routes>
            </div>
            <Footer />
        </div>
  )
}

export default App
