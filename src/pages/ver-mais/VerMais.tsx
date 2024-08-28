import './VerMais.css'
import {useLocation} from "react-router-dom";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import {SlSpeedometer} from "react-icons/sl";
import {MdOutlineCalendarMonth, MdOutlineColorLens, MdOutlineFactCheck} from "react-icons/md";
import {TbManualGearbox} from "react-icons/tb";
import {GoCheckCircle} from "react-icons/go";
import {HiMiniArrowsRightLeft, HiMiniSignal} from "react-icons/hi2";

const VerMais = () => {

    const location = useLocation()
    const veiculo: Vehicle = location.state.veiculo || {}
    const { getLogo } = useGetLogoEmpresas()

    const trataMarca = (valor: string) => {
        return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
    }

    return (
        <div className="ver-mais">
            <div className="ver-mais-title">
                <img src={getLogo(veiculo.marca)} alt="" />
                <div>
                    <h1>{trataMarca(veiculo.marca)}<span>{veiculo.modelo}</span></h1>
                    <h2>{veiculo.versao}</h2>
                </div>
                <h3>R$ <span>{veiculo.precoVenda}</span></h3>
            </div>
            <div className="informacoes-ver-mais">
                <div className="ficha-tecnica-ver-mais">
                    <h1>Ficha Técnica</h1>
                    <div className="div-item-ficha-tecnica-ver-mais">
                        <div className="item-ficha-tecnica-ver-mais">
                            <TbManualGearbox className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{trataMarca(veiculo.cambio)}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <MdOutlineCalendarMonth className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.anoModelo + "/" + veiculo.anoFabricacao}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <SlSpeedometer className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.km + " km"}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <MdOutlineColorLens className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{trataMarca(veiculo.cor)}</p>
                        </div>
                    </div>
                </div>
                <div className="garantia-ver-mais">
                    <h1>Garantia</h1>
                    <div className="conteudo-garantia-ver-mais">
                        <p>Garantia da Loja (3 meses)</p>
                    </div>
                </div>
            </div>
            <div className="opcionais-ver-mais">
                <h1>Opcionais</h1>
                <div className="itens-opcionais-ver-mais">
                    {veiculo.opcionais.opcional.map((value, index) =>
                        <div className="item-opcional-ver-mais" key={index}>
                            <GoCheckCircle className="icon-item-opcional-ver-mais"/>
                            <p>{trataMarca(value.descricao)}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="caracteristicas-ver-mais">
                <div className="item-caracteristica-ver-mais">
                    <HiMiniArrowsRightLeft className="icon-item-caracteristica-ver-mais"/>
                    <p>Aceita troca</p>
                </div>
                <div className="item-caracteristica-ver-mais item-caracteristica-centro">
                    <HiMiniSignal className="icon-item-caracteristica-ver-mais"/>
                    <p>Oportunidade</p>
                </div>
                <div className="item-caracteristica-ver-mais">
                    <MdOutlineFactCheck className="icon-item-caracteristica-ver-mais"/>
                    <p>Veículo periciado</p>
                </div>
            </div>
            <div className="mais-informacoes-ver-mais">
                <h1>Informações</h1>
                <p>
                    A procura de um Hyundai HB20 Comf./C.Plus/C.Style 1.0 Flex 12V - Prata - 2013 seminovo? Aqui tem. 3 Meses de garantia. Ano: 2012/2013 Potência: 75 cv. Câmbio: Manual Consumo: Urbano: 11.0 Km/l - Rodovia: 14.0 Km/l. Gostou deste carro? Temos uma equipe de atendimento on-line pronta para te atender. Tire todas suas dúvidas de forma rápida e descomplicada, através do nosso WhatsApp (11)93452-4004, ou se preferir, faça uma visita. Nosso endereço é Avenida dos Autonomistas, nº 3423, Centro, Osasco - São Paulo . Te esperamos!                </p>
            </div>
        </div>
    )
}

export default VerMais
