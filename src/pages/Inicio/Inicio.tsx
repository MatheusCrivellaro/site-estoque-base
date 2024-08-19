import './Inicio.css'
import {Link, useNavigate} from "react-router-dom";
import imageAvaliacoesInicio from "../../images/amico.png"
import imgPerfil from "../../images/img.png"
import AvaliacaoCard from "../../components/AvaliacaoCard/AvaliacaoCard.tsx";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useCollects from "../../hooks/useCollects.tsx";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner.tsx";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";

const Inicio = () => {

    const { data } = useGetStock();
    const { marcas  } = useCollects(data)
    useFiltersVehicles(data);

    const navigate = useNavigate();

    const handleSelectedMarca = (selectedMarca: string) => {
        navigate('/veiculos/#veiculos', { state: { marcaSelecionada: selectedMarca } });
    };

    return (
        <div className="inicio">
            <ButtonSuspense />
            <CarouselBanner />
            {/*<div className="banner-div-inicio">*/}
            {/*    <div className="text-banner-div-inicio">*/}
            {/*        <div className="text-banner-inicio">*/}
            {/*            <h1>Seu próximo carro <span>está aqui!</span></h1>*/}
            {/*            <h2>*/}
            {/*                Adquira agora mesmo seu veículo dos sonhos com <span>condições especiais!</span>*/}
            {/*            </h2>*/}
            {/*            <h2>Veja agora mesmo nossos veículos em destaque:</h2>*/}
            {/*            <div className="div-buttons-banner-inicio">*/}
            {/*                <Link to="/financiamento" className="button-banner-inicio button-banner-grey">*/}
            {/*                    Fazer um financiamento*/}
            {/*                </Link>*/}
            {/*                <a href="/#veiculos-destaque" className="button-banner-inicio button-banner-blue">*/}
            {/*                    Ver veículos em destaque*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <img src={imageBannerinicio} alt="" />*/}
            {/*</div>*/}
            {/*<div className="informations-div-inicio">*/}
            {/*    <InformationCard title="Carros novos e semi-novos" description="Nós proporcionamos para você condições especiais para poder adquirir o veículo dos seus sonhos! " image={iconInformation1}/>*/}
            {/*    <InformationCard title="Compra de veículos" description="Compramos seu veículo sem burocracia, com agilidade na análise e preço justo." image={iconInformation2}/>*/}
            {/*    <InformationCard title="Financie o seu sonho" description="Temos como parceiras as principais financeiras, isso garante melhores taxas para você!" image={iconInformation3}/>*/}
            {/*</div>*/}

            <div className="div-carousel-categorias">
                <CarouselCategorias marcas={marcas} handleSelectedMarca={handleSelectedMarca}/>
            </div>

            <div className="veiculos-destaque-div-inicio" id="veiculos-destaque">
                <h1>Veículos em destaque</h1>
                <div className="veiculos-destaque-cards-div-inicio row">
                    {data?.slice(0, 4).map((i: Vehicle, index) =>
                        <CardVeiculoEstoque veiculo={i} key={"carro" + index}/>
                    )}
                </div>
                <div className="col-12 d-flex justify-content-start">
                    <Link to="/veiculos/#veiculos" className="button-veiculos-destaque-inicio">Ver estoque</Link>
                </div>
            </div>
            <div className="avaliacoes-div-inicio">
                <div className="avaliacoes-cards-div-inicio">
                    <h1>As avaliações dos nossos clientes</h1>
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                </div>
                <img src={imageAvaliacoesInicio} className="img-padrao" alt="" />
            </div>
        </div>
    )
}

export default Inicio
