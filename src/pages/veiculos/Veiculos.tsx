import {useCallback, useEffect, useRef, useState} from "react";
import { LuFilter } from "react-icons/lu";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import OptionFiltroContainer from "../../components/OptionFiltroContainer/OptionFiltroContainer.tsx";
import useCollects from "../../hooks/useCollects.tsx";
import { useGetStock } from "../../hooks/useGetStock.tsx";
import { Filters } from "../../interfaces/Filters.ts";
import { Vehicle } from "../../interfaces/Vehicle.ts";
import './Veiculos.css';
import {useLocation} from "react-router-dom";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import ButtonFilterOrdenation from "../../components/ButtonFilterOrdenation/ButtonFilterOrdenation.tsx";
import {CgSearch} from "react-icons/cg";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading.tsx";


const Veiculos = () => {

    const {state} = useLocation()
    let marcaSelecionada:string | undefined = state === null ? "" : state.marcaSelecionada

    const searchRef = useRef<HTMLInputElement>(null);

    const { data, isLoading } = useGetStock();
    const { marcas, cores, cambios, carrocerias, combustiveis } = useCollects(data)

    const [selectedColors, setSelectedColors] = useState<string>('todos');
    const [selectedMarcas, setSelectedMarcas] = useState<string>('todos');
    const [selectedCambios, setSelectedCambios] = useState<string>('todos');
    const [selectedCombustivel, setSelectedCombustivel] = useState<string>('todos');
    const [selectedCarroceria, setSelectedCarroceria] = useState<string>('todos');
    const [precoMin, setPrecoMin] = useState<string>('');
    const [precoMax, setPrecoMax] = useState<string>('');
    const [searchName, setSearchName] = useState<string>('');

    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [filters, setFilters] = useState<Filters>({});
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const updateFilter = useCallback((key: keyof Filters, value: string, setValue: (value: string) => void) => {
        setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
        setValue(value)
    }, [])

    const applyFilter = (ordenation: string, marca: string, search?: string) => {
        let result = data!.filter((vehicle) => {
            return (
                (filters.cor === undefined || filters.cor === "todos" || vehicle.cor.toLowerCase() === filters.cor) &&
                (filters.marca === undefined || filters.marca === "todos" || marca !== "" || vehicle.marca.toLowerCase() === filters.marca) &&
                (filters.combustivel === undefined || filters.combustivel === "todos" || vehicle.combustivel.toLowerCase() === filters.combustivel) &&
                (filters.carroceria === undefined || filters.carroceria === "todos" || vehicle.carroceria.toLowerCase() === filters.carroceria) &&
                (filters.cambio === undefined || filters.cambio === "todos" || vehicle.cambio.toLowerCase() === filters.cambio) &&
                (filters.precoMax === undefined || filters.precoMax === "" || extractNumbers(vehicle.precoVenda) < extractNumbers(filters.precoMax)) &&
                (filters.precoMin === undefined || filters.precoMin === "" || extractNumbers(vehicle.precoVenda) > extractNumbers(filters.precoMin))
            );
        });
        if (marca !== "")
            result = result.filter((vehicle) => {
                return vehicle.marca.toLowerCase() === marca
            });
        result = sortVehicles(result, ordenation !== "" ? ordenation : filters.ordenacao);
        setFilteredVehicles(result);
        if (search) {
            setFilteredVehicles(data!.filter(vehicle => vehicle.marca.toLowerCase().includes(search.toLowerCase()) || vehicle.modelo.toLowerCase().includes(search.toLowerCase())))
        }
    }

    const sortVehicles = (vehicles: Vehicle[], typeOrdenacao?: string): Vehicle[] => {
        const sortFunctions: { [key: string]: (a: Vehicle, b: Vehicle) => number } = {
            "marca-modelo": (a, b) => a.marca.localeCompare(b.marca) || a.modelo.localeCompare(b.modelo),
            "ano-mais-novo": (a, b) => extractNumbers(b.anoFabricacao) - extractNumbers(a.anoFabricacao),
            "menor-km": (a, b) => extractNumbers(a.km) - extractNumbers(b.km),
            "menor-preco": (a, b) => extractNumbers(a.precoVenda) - extractNumbers(b.precoVenda),
            "maior-preco": (a, b) => extractNumbers(b.precoVenda) - extractNumbers(a.precoVenda),
        };

        return typeOrdenacao && sortFunctions[typeOrdenacao]
            ? vehicles.slice().sort(sortFunctions[typeOrdenacao])
            : vehicles;
    };

    const handleSearchButton = () => {
        setSearchName("")
        if (searchRef.current) {
            applyFilter("", "", searchRef.current.value)
        }
    }

    const toggleCollapse = () => {
        setIsOpenFilter(!isOpenFilter);
    };

    function extractNumbers(input: string): number {
        return parseFloat(input.replace(/\./g, '').replace(',', '.'))
    }

    const handleOrdenacao = (value: string) => {
        value
    }

    const handleSelectMarcaCarousel = (value: string) => {
        setSelectedMarcas(value)
        applyFilter("", value)
    }

    const handlePrecoMinChange = (value: string) => {
        if (/^\d*$/.test(value) && value.length <= 11) {
            updateFilter('precoMin', value, setPrecoMin)
            setPrecoMin(value)
        }
    };

    const handlePrecoMaxChange = (value: string) => {
        if (/^\d*$/.test(value) && value.length <= 11) {
            console.log("entrou")
            updateFilter('precoMax', value, setPrecoMax)
            setPrecoMax(value)
        }
    };

    const handleUpdateClearFilters = () => {
        updateFilter('marca', "todos", setSelectedMarcas)
        updateFilter('cor', "todos", setSelectedColors)
        updateFilter('cambio', "todos", setSelectedCambios)
        updateFilter('carroceria', "todos", setSelectedCarroceria)
        updateFilter('combustivel', "todos", setSelectedCombustivel)
        updateFilter('precoMax', "", handlePrecoMinChange)
        updateFilter('precoMin', "", handlePrecoMaxChange)
        updateFilter('ordenacao', "relevancia", handleOrdenacao)
    }

    useEffect(() => {
        if (data)
            setFilteredVehicles(data);
        if (marcaSelecionada !== "") {
            applyFilter("", marcaSelecionada!)
            setSelectedMarcas(marcaSelecionada!)
        }
    }, [data]);

    return (
        <div>
            <ButtonSuspense/>
            <div className="veiculos" id="veiculos">
                {isOpenFilter &&
                    <div className="filtro-div-veiculos">
                        <div className="menu-filtros-div-veiculos">
                            <h1 className="col-12">Filtrar</h1>
                            <div className="d-flex col-12">
                                <div className="col-6 div-clear-filtro-button">
                                    <button className="clear-filtro-button" onClick={() => {handleUpdateClearFilters()}}>
                                        Limpar
                                    </button>
                                </div>
                                <div className="col-6 div-filtro-button">
                                    <button className="filtro-button" onClick={() => applyFilter("", "")}>Aplicar <LuFilter className="icon-button-filtro"/></button>
                                </div>
                            </div>
                            <ButtonFilterOrdenation handle={applyFilter} classeButton={"button-ordenar"} classeList={"button-ordenar-menu"} />
                        </div>
                        <div className="menu-preco-filtros-div-veiculos">
                            <h1>Preço</h1>
                            <div className="div-input-preco">
                                <label htmlFor="de">De</label>
                                <input type="number" placeholder="R$0,00" id="de" value={precoMin} min="0"
                                       max={precoMax}
                                       step="10000" onChange={(e) => handlePrecoMinChange(e.target.value)}/>
                            </div>
                            <div className="div-input-preco">
                                <label htmlFor="ate">Até</label>
                                <input type="number" placeholder="R$1.000.000,00" id="ate" value={precoMax}
                                       min={precoMin}
                                       max="5000000" step="10000"
                                       onChange={(e) => handlePrecoMaxChange(e.target.value)}/>
                            </div>
                        </div>
                        <OptionFiltroContainer title="Marcas" group={"marca"} value={marcas}
                                               handle={(e) => updateFilter('marca', e.target.value, setSelectedMarcas)}
                                               selected={selectedMarcas} todos={true}/>
                        <OptionFiltroContainer title="Cores" group={"cor"} value={cores}
                                               handle={(e) => updateFilter('cor', e.target.value, setSelectedColors)}
                                               selected={selectedColors} todos={true}/>
                        <OptionFiltroContainer title="Câmbio" group={"cambio"} value={cambios}
                                               handle={(e) => updateFilter('cambio', e.target.value, setSelectedCambios)}
                                               selected={selectedCambios} todos={true}/>
                        <OptionFiltroContainer title="Combustível" group={"combustivel"} value={combustiveis}
                                               handle={(e) => updateFilter('combustivel', e.target.value, setSelectedCombustivel)}
                                               selected={selectedCombustivel} todos={true}/>
                        <OptionFiltroContainer title="Carroceria" group={"carroceria"} value={carrocerias}
                                               handle={(e) => updateFilter('carroceria', e.target.value, setSelectedCarroceria)}
                                               selected={selectedCarroceria} todos={true}/>
                        <div className="col-12 div-filtro-button">
                            <button className="filtro-button" onClick={() => applyFilter("", "")}>Aplicar <LuFilter className="icon-button-filtro"/></button>
                        </div>
                    </div>
                }
                <div className={`cards-div-veiculos ${isOpenFilter ? "is-open-div-cards" : "is-close-div-cards"}`}>
                    {filteredVehicles.length === 0 ?
                        (isLoading ?
                            <SpinnerLoading />
                             :
                            <div className="cards-itens-div-none-veiculos">
                                <div className="div-container-carousel-categorias">
                                    <CarouselCategorias handleSelectedMarca={handleSelectMarcaCarousel} marcas={marcas}/>
                                </div>
                                <div>
                                    <h1 className="col-12 cards-itens-div-none-veiculos-title">Veículos em destaque</h1>
                                    <h3><span>{filteredVehicles.length}</span> veículos encontrados</h3>
                                </div>
                                <h2 className="cards-itens-div-none-veiculos-msg-desenho">:(</h2>
                                <h2 className="cards-itens-div-none-veiculos-msg">
                                    Ops, não há veículos disponíveis para os filtros aplicados. Por favor, tente outra combinação de filtros
                                </h2>
                            </div>) :
                        <div className={`cards-itens-div-veiculos ${!isOpenFilter ? "margin-list-veiculos" : ""}`}>
                            <div className="div-container-carousel-categorias">
                                <CarouselCategorias handleSelectedMarca={handleSelectMarcaCarousel} marcas={marcas}/>
                            </div>
                            <div className="informations-list-veiculos">
                                <div className="search-camp">
                                    <input type="text" placeholder="Busque por Marca e Modelo" value={searchName} ref={searchRef} onChange={(e) => setSearchName(e.target.value)}/>
                                    <button onClick={handleSearchButton}><CgSearch/></button>
                                </div>
                                <div className="div-buttons-informations-list-veiculos">
                                    <button onClick={toggleCollapse}
                                            className="button-informations-list-veiculos">Filtrar
                                    </button>
                                    <ButtonFilterOrdenation handle={applyFilter}
                                                            classeButton={"button-ordenar-informations-list-veiculos"}
                                                            classeList={"button-ordenar-menu-informations-list-veiculos"}/>
                                </div>
                            </div>
                            <h3><span>{filteredVehicles.length}</span> veículos encontrados</h3>
                            <div
                                className={isOpenFilter ? "list-veiculos-container-open-filter" : "list-veiculos-container-close-filter"}>
                                {filteredVehicles.length === 0 ?
                                    <h2>Nada encontrado</h2> : filteredVehicles?.map(value =>
                                        <CardVeiculoEstoque veiculo={value} key={value.codigo}/>
                                    )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Veiculos
