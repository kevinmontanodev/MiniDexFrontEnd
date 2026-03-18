import type { DailyPackStatusResponse, openEnvelopeResponse } from "../types/pack.types"

export const openEnvelope = async() : Promise<openEnvelopeResponse> => {
    try {
        const res = await fetch("/api/trainer/envelope", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({})
        })

        const data = await res.json()
        
        if (!res.ok){
            return {success: false, message: data.error || "Error to get daily envelope pokemons"}
        }
        return {success: true, pokemons: data.pokemons}


    } catch (error) {
        return {success: false, message: "Server connection error"}
    }
}

export const getEnvelopeStatus = async() : Promise<DailyPackStatusResponse> => {
    try {
        const res = await fetch("/api/trainer/envelope", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })

        const data = await res.json()
        
        if (!res.ok){
            return {success: false, message: data.error || "Error to get daily envelope pokemons"}
        }
        return {success: true,  numEnvelopes: data.numEnvelopes }


    } catch (error) {
        return {success: false, message: "Server connection error"}
    }
}