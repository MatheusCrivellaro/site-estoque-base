import './ButtonSuspense.css'

import instagram from '../../../public/Instagram_icon.png'
import facebook from '../../../public/facebook.png'
import whatsapp from '../../../public/whatsapp.png'

const ButtonSuspense = () => {
    return (
        <div className="div-button-suspense">
            <div className="button-suspense">
                <a href=""> <img src={facebook} alt="" className="button-suspense-content"/></a>
            </div>
            <div className="button-suspense">
            <img src={instagram} alt="" className="button-suspense-content"/>
            </div>
            <div className="button-suspense">
                <img src={whatsapp} alt="" className="button-suspense-content"/>
            </div>
        </div>
    )
}

export default ButtonSuspense
