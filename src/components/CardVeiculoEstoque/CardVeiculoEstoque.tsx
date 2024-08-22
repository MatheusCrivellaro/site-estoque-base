import './CardVeiculoEstoque.css'

import {Link} from "react-router-dom";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {SlSpeedometer} from "react-icons/sl";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import CarouselCards from "../CarouselCards/CarouselCards.tsx";
import imgPadrao from '../../../public/imgPadrao.jpg'

type props = {
    veiculo: Vehicle
}

const CardVeiculoEstoque = ({ veiculo }:props) => {

    const { getLogo } = useGetLogoEmpresas()

    return (
        <div className="col-3 card-veiculo-div-estoque">
            <div className="card-veiculo-estoque">
                <div className="div-container-carousel-categorias-card-veiculo">
                    {veiculo.fotos.foto.length !== 0 ? <CarouselCards veiculo={veiculo} /> : <img src={imgPadrao} alt="" className="img-padrao-card"/>}
                </div>
                <div className="div-informations-card-estoque">
                    <h4><img src={getLogo(veiculo.marca)} alt="" className="img-logo-card-veiculo"/> <span>{veiculo.marca + " "}</span>{veiculo.modelo}</h4>
                    <h2>{veiculo.versao}</h2>
                    <div className="ano-km-div-card-veiculo-estoque">
                        <p><MdOutlineCalendarMonth className="icon-card-veiculos-estoque"/>{veiculo.anoFabricacao + "/" + veiculo.anoModelo}</p>
                        <p><SlSpeedometer className="icon-card-veiculos-estoque"/>{veiculo.km} Km</p>
                    </div>
                    <h3><span>R$ {veiculo.precoVenda}</span></h3>
                    <div className="d-flex">
                        <Link to="/" className="button-card-veiculos-estoque">Ver mais</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVeiculoEstoque
