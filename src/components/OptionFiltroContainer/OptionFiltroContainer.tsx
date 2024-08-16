import './OptionFiltroContainer.css'
import {ChangeEvent} from "react";

type props = {
    title: string,
    value: string[],
    group: string,
    handle: (e: ChangeEvent<HTMLInputElement>) => void,
    todos: boolean
    selected: string[]
}

const OptionFiltroContainer = ({ title, value, group, handle, todos, selected}: props) => {

    const trataLabel = (nome: string) => {
        if (nome === "gasolina e álcool")
            return "flex"
        if (nome === "suv / utilitário esportivo")
            return "suv / utilitário"
        return nome
    }

    return (
        <div className="div-options-filtro-veiculos">
            <h1>{title}</h1>
            <div className="div-options-radios-veiculos row">
                {todos ?
                    <div className="col-6">
                        <input type="radio" name={group} id="todos" onChange={handle} value="todos" checked={selected.length ===0 || selected.includes("todos")}/>
                        <label htmlFor="todos">Todos</label>
                    </div> :
                    ""
                }
                {value.map((valor, index) =>
                    <div className="col-6" key={index + valor}>
                        <input type="radio" name={group} id={valor} onChange={handle} value={valor} checked={selected.includes(valor)}/>
                        <label htmlFor={valor}>
                            {trataLabel(valor)}
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OptionFiltroContainer
