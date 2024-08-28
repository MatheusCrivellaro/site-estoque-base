import './Venda.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {usePostMail} from "../../hooks/usePostMail.tsx";
import FormDadosCliente from "../../components/FormDadosCliente/FormDadosCliente.tsx";

const Venda = () => {

    const { mutate } = usePostMail()

    const textFormater = (nomeText: string, dadosText: string, telefoneText: string, wppBool: boolean, emailText: string) => {
        return nomeText + "\n" + telefoneText + (wppBool ? " - WhatsApp" : "") + "\n" + emailText + "\n" + dadosText
    }

    const submitEmail = (list: [...any]) => {
        let to = "matheuscriv@gmail.com";
        let subject = "Venda de veiculo, " + list[0]
        let text = textFormater(list[0], list[1], list[2], list[3], list[4]);
        console.log(list);
        mutate({to, subject, text})
    }

    return (
        <div className="venda">
            <ButtonSuspense />
            <div className="venda-container">
                <div className="venda-form">
                    <div className="venda-form-title">
                        <h1>Quer vender seu veículo?</h1>
                        <h2>Preencha os campos abaixo com os dados do seu veículo e com os seus dados.</h2>
                    </div>
                    <FormDadosCliente submit={submitEmail} financiamento={false}/>
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

