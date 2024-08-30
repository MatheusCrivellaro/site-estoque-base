import './GaleriaFotosVerMais.css'
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Fancybox} from "@fancyapps/ui";

const GaleriaFotosVerMais = () => {

    const { data } = useGetStock();

    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options
    });

    return (
        <div>
            {data?.pop()!.fotos.foto.map(foto => (
                <a href={foto.uri} data-fancybox="gallery" data-caption="Caption #1">
                    <img src={foto.uri} alt=""/>
                </a>
            ))}
        </div>
    )
}

export default GaleriaFotosVerMais
