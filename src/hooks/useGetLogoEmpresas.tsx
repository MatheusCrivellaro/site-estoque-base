import audi from "../../public/logos/audi.png"
import fiat from "../../public/logos/fiat.png"
import ford from "../../public/logos/ford.png"
import chevrolet from "../../public/logos/gm-chevrolet.png"
import hyundai from "../../public/logos/hyundai.png"
import land_hover from "../../public/logos/land-rover.png"
import mercedes from "../../public/logos/mercedes-benz.png"
import renault from "../../public/logos/renault.png"
import toyota from "../../public/logos/toyota.png"
import volkswagen from "../../public/logos/vw-volkswagen.png"
import honda from "../../public/logos/honda.png"
import jeep from "../../public/logos/jeep.png"
import peugeot from '../../public/logos/peugeot.png'

const useGetLogoEmpresas = () => {

    const logos: { [key: string]: any } = {
        audi: audi,
        fiat: fiat,
        ford: ford,
        chevrolet: chevrolet,
        hyundai: hyundai,
        "land-hover": land_hover,
        "mercedes-benz": mercedes,
        renault: renault,
        toyota: toyota,
        volkswagen: volkswagen,
        honda: honda,
        jeep: jeep,
        peugeot: peugeot
    };

    const getLogo = (nome: string) => {
        const nomeTolowerCase = nome.toLowerCase();
        return logos[nomeTolowerCase];
    };

    return {
        getLogo
    }
}

export default useGetLogoEmpresas
