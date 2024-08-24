import './Venda.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {IoDocumentTextOutline} from "react-icons/io5";
import {TbFaceId} from "react-icons/tb";
import {FaPhone} from "react-icons/fa6";
import {LuMail} from "react-icons/lu";
import {GoArrowRight} from "react-icons/go";

const Venda = () => {
    return (
        <div className="venda">
            <ButtonSuspense />
            <div className="venda-container">
                <div className="venda-form">
                    <div className="venda-form-title">
                        <h1>Quer vender seu veículo?</h1>
                        <h2>Preencha os campos abaixo com os dados do seu veículo e com os seus dados.</h2>
                    </div>
                    <div className="venda-form-input-div">
                        <div className="input-venda-dados">
                            <h3>Dados do seu veículo</h3>
                            <div className="content-input-venda">
                                <IoDocumentTextOutline className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"/>
                            </div>
                            <p>Descreva o seu veículo. </p>
                            <p>Exemplo: Toyota Corola 2017...</p>
                        </div>
                        <div className="input-venda-nome">
                            <h3>Seu nome</h3>
                            <div className="content-input-venda">
                                <TbFaceId className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"/>
                            </div>
                        </div>
                        <div className="input-venda-phone">
                            <h3>Seu telefone</h3>
                            <div className="content-input-venda">
                                <FaPhone className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"/>                            </div>
                            <div className="check-input-phone-div">
                                <input type="checkbox"/>
                                <p>Este telefone é WhatsApp</p>
                            </div>
                        </div>
                        <div className="input-venda-email">
                            <h3>Seu e-mail</h3>
                            <div className="content-input-venda">
                                <LuMail className="icon-input-venda"/>
                                <input type="text" placeholder="Digite aqui..." className="input-venda-form-item"/>
                            </div>
                        </div>
                        <div className="content-button-submit-form-venda">
                            <button className="button-submit-form-venda">Enviar para análise <GoArrowRight
                                className="icon-button-submit-form-venda"/></button>
                        </div>
                    </div>
                </div>
                <div className="venda-como-funciona">
                    <h1 className="venda-como-funciona-title">Como funciona</h1>
                    <div className="container-img-passo-venda">
                        <img src="../../../public/_13fac55d-b9c4-42a7-99e6-556512778437.jpeg" alt=""/>
                        <div className="container-text-passo-venda">
                            <h1>1º passo</h1>
                            <p>Entramos em contato com você</p>
                        </div>
                    </div>
                    <div className="container-img-passo-venda-contrario">
                        <div className="container-text-passo-venda">
                            <h1>2º passo</h1>
                            <p>Avaliamos seu veículo</p>
                        </div>
                        <img src="../../../public/th.jpeg" alt=""/>
                    </div>
                    <div className="container-img-passo-venda">
                        <img src="../../../public/_9bb3477b-6847-49f5-8d24-17f36d701944.jpeg" alt=""/>
                        <div className="container-text-passo-venda">
                            <h1>3º passo</h1>
                            <p>Fechamos negócio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venda

