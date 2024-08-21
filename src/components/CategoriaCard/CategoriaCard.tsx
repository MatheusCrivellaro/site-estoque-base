import './CategoriaCard.css'

type props = {
    image: string,
    title: string,
    handleSelectedMarca: (selectMarca: string) => void
}

const CategoriaCard = ({ image, title, handleSelectedMarca }:props) => {

    return (
        <button onClick={() => handleSelectedMarca(title)} className="categorias-card-inicio col-1">
            <div className="div-itens-card-categoria">
                <img src={image} alt=""/>
                <h1 className="title-card-categoria">{title}</h1>
            </div>
        </button>
    )
}

export default CategoriaCard;
