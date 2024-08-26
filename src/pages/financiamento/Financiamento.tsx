import './Financiamento.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {FaArrowDown, FaPhone} from "react-icons/fa6";
import CardPassoFinanciamento from "../../components/CardPassoFinanciamento/CardPassoFinanciamento.tsx";
import ArrowFinanciamento from "../../components/ArrowFinanciamento/ArrowFinanciamento.tsx";
import CardIntituicoesParceiras from "../../components/CardIntituicoesParceiras/CardIntituicoesParceiras.tsx";
import {TbFaceId} from "react-icons/tb";
import {GoArrowRight} from "react-icons/go";

const Financiamento = () => {
    return (
        <div className="financiamento">
            <ButtonSuspense />
            <div className="financiamento-container">
                <div className="passos-financiamento-container">
                    <h1>Fazer um financiamento</h1>
                    <div className="passos-financiamento">
                        <CardPassoFinanciamento img="../../../public/image-financiamento.jpeg" title="1º passo - Pesquisa" description="Pesquisamos por taxas dos bancos com base nos seus dados pessoais, dados do veículo e valor a ser financiado."/>
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img="../../../public/image-financiamento.jpeg" title="2º passo - Aprovação" description="Você escolhe a melhor opção e passamos todos os seus dados ao banco para te aprovar."/>
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img="../../../public/image-financiamento.jpeg" title="Pronto" description="Agora é só assinar o contrato conosco e realizar o pagamento."/>
                    </div>
                    <div className="button-container-passoas-financiameto">
                        <button>
                            Fazer um refinanciamento
                            <FaArrowDown className="button-icon-passoas-financiameto"/>
                        </button>
                    </div>
                </div>
                <div className="passos-financiamento-container">
                    <h1>Fazer um refinanciamento</h1>
                    <div className="passos-financiamento">
                        <CardPassoFinanciamento img="../../../public/image-dinheiro-financiamento.jpeg" title="Dinheiro no bolso" description="Faça empréstimos, deixando seu veículo como forma de garantia."/>
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img="../../../public/image-dinheiro-financiamento.jpeg" title="Aprovação" description="Pré-aprovação em minutos, após finalizar cadastro."/>
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img="../../../public/image-dinheiro-financiamento.jpeg" title="Por que contratar?" description="Facilidade em emprestar quantias maiores com prazo maior de pagamento, além de taxas competitivas."/>
                    </div>
                    <div className="button-container-passoas-financiameto">
                        <button>
                            Fazer refinanciamento
                            <FaArrowDown className="button-icon-passoas-financiameto"/>
                        </button>
                    </div>
                </div>
                <div className="instituicoes-financiamento">
                    <h1>Instituições parceiras</h1>
                    <div className="container-cards-instituicoes-financiamento">
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                        <CardIntituicoesParceiras img="https://logo.clearbit.com/itau.com.br" titulo="Bradesco" />
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Quer financiar ou refinanciar seu veículo?</h1>
                        <h2>Preencha os campos abaixo com os dados do seu veículo e com os seus dados.</h2>
                        <div>
                            <h3>Gostaria de financiar</h3>
                            <div>
                                <input type="checkbox" id="carro-proprio"/>
                                <label htmlFor="carro-proprio">Carro próprio</label>
                            </div>
                            <div>
                                <input type="checkbox" id="carro-particular"/>
                                <label htmlFor="carro-particular">Carro particular</label>
                            </div>
                            <div>
                                <input type="checkbox" id="carro-loja"/>
                                <label htmlFor="carro-loja">Carro da loja</label>
                            </div>
                        </div>
                        <div>
                            <h3>Seu nome</h3>
                            <div>
                                <TbFaceId />
                                <input type="text" placeholder="Digite aqui..."/>
                            </div>
                        </div>
                        <div>
                            <h3>Seu telefone</h3>
                            <div>
                                <FaPhone />
                                <input type="text" placeholder="Digite aqui..."/>
                            </div>
                            <div>
                                <input type="checkbox" id="wpp-phone"/>
                                <label htmlFor="wpp-phone">Este telefone é WhatsApp</label>
                            </div>
                        </div>
                        <div>
                            <button>
                                Solicitar análise
                                <GoArrowRight />
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financiamento

