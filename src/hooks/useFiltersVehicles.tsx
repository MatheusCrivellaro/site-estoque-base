import { useState, useEffect } from 'react';
import {Vehicle} from "../interfaces/Vehicle.ts";
import {Filters} from "../interfaces/Filters.ts";

const useFilteredVehicles = (vehicles: Vehicle[] = [], initialFilters: Filters = {}) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);

  function convertToNumber(numberString: string) {
    const cleanedStr = numberString.replace(/\./g, '').replace(',', '.');
    return parseFloat(cleanedStr);
  }

  const ordenaLista = (ordenacao: string | undefined, data: Vehicle[]) => {
    console.log("entrou")
    if (ordenacao) {
      if (ordenacao === "relevancia")
        return data
      if (ordenacao==="menor-preco")
        return data.sort((a, b) => {
          return convertToNumber(a.precoVenda) - convertToNumber(b.precoVenda)
        })
      if (ordenacao==="maior-preco")
        return data.sort((a, b) => convertToNumber(b.precoVenda) - convertToNumber(a.precoVenda))
      if (ordenacao==="ano-mais-novo")
        return data.sort((a, b) => convertToNumber(a.anoModelo) - convertToNumber(b.anoModelo))
      if (ordenacao==="menor-km")
        return data.sort((a, b) => convertToNumber(a.km) - convertToNumber(b.km))
      if (ordenacao==="marca-modelo")
        return data.sort((a, b) => convertToNumber(a.precoVenda) - convertToNumber(b.precoVenda))
    }
    return data
  }

  useEffect(() => {
    let result = vehicles;
    let updateAllowed = false

    if (vehicles.length>0) {
      updateAllowed = true
    }
    if (filters.marcas && filters.marcas.length>0) {
      updateAllowed = true
      if (!filters.marcas.includes("todos"))
        result = result.filter(vehicle => filters.marcas?.includes(vehicle.marca.toLowerCase() as string));
    }
    if (filters.cores && filters.cores.length>0){
      updateAllowed = true
      if (!filters.cores.includes("todos"))
        result = result.filter(vehicle => filters.cores?.includes(vehicle.cor.toLowerCase() as string));
    }

    if (filters.cambio && filters.cambio.length>0){
      updateAllowed = true
      if (!filters.cambio.includes("todos"))
        result = result.filter(vehicle => filters.cambio?.includes(vehicle.cambio.toLowerCase() as string));
    }

    if (filters.combustivel && filters.combustivel.length>0){
      console.log("Entrou combustivel" + filters.combustivel)
      updateAllowed = true
      if (!filters.combustivel.includes("todos"))
        result = result.filter(vehicle => filters.combustivel?.includes(vehicle.combustivel.toLowerCase() as string));
    }

    if (filters.carroceria && filters.carroceria.length>0){
      updateAllowed = true
      if (!filters.carroceria.includes("todos"))
        result = result.filter(vehicle => filters.carroceria?.includes(vehicle.carroceria.toLowerCase() as string));
    }

    if (filters.precoMax) {
      updateAllowed = true
      result = result.filter(vehicle => convertToNumber(vehicle.precoVenda) < filters.precoMax!)
    }

    if (filters.precoMin) {
      updateAllowed = true
      result = result.filter(vehicle => convertToNumber(vehicle.precoVenda) > filters.precoMin!)
    }

    result = ordenaLista(filters.ordenacao, result)

    if (updateAllowed){
      setFilteredVehicles(result)
    }
  }, [vehicles, filters]);

  return {
    filteredVehicles,
    setFilters
  };
};

export default useFilteredVehicles;
