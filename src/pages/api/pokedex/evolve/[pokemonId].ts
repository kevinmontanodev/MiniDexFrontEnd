import { handleApiError } from "@/server/errors/handleApiError";
import { evolPokemon } from "@/server/services/pokedex.service";
import type { APIRoute } from "astro";

export const POST:APIRoute = async ({locals, params}) => {
    try {
        console.log("TOKEN:", locals.token)
        if (!locals.token){
            return Response.json({message: "Unhautorize"}, {status: 403})
        }

        const pokemonId = params.pokemonId
        if (!pokemonId){
            return Response.json({message: "Pokemon id not found"}, {status: 404})
        }
        return Response.json(await evolPokemon(locals.token, pokemonId))
    } catch (error) {
        return handleApiError(error)
    }
}