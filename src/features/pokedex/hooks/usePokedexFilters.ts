import type { Pokemon } from "@/interfaces/pokemon";
import { useMemo, useState } from "react";

export function usePokedexFilters(pokedex: Pokemon[]){
    const [filters, setFilters] = useState({
        pokemonType: "ALL",
        shiny: false,
        orderByPokedex: false
    })

    const changeType = (type: string) => {
        setFilters(prev => ({...prev, pokemonType: type}))
    }

    const toggleShiny = () => {
        setFilters(prev => ({...prev, shiny: !prev.shiny}))
    }

    const orderByNumPokedex = () => {
        setFilters(prev => ({...prev, orderByPokedex: !prev.orderByPokedex}))
    }

    const filteredPokemons = useMemo(() => {
        let result = pokedex

        if (filters.pokemonType !== "ALL"){
            result = result.filter(p => 
                p.types.some(t => t.name.toLowerCase() === filters.pokemonType.toLowerCase())
            )
        }

        if (filters.shiny){
            result = result.filter(p => p.shiny)
        }

        if (filters.orderByPokedex){
            const copy = [...result]

            return copy.sort((a, b) => a.numPokedex - b.numPokedex)
        }

        return result

    }, [pokedex, filters])

    return {
        filters,
        filteredPokemons,
        changeType,
        toggleShiny,
        orderByNumPokedex
    }
}