import type { BattleEvent } from "../types/battle.types"

export const generateMessage = (event: BattleEvent): string => {
    switch (event.type) {
        case "ATTACK":
        return event.side === "PLAYER"
            ? `Your Pokémon used ${event.moveName}! and ${event.hit ? `hit ${event.hitResult}` : 'failed'}`
            : `Enemy used ${event.moveName}! and ${event.hit ? `hit ${event.hitResult}` : 'failed'}`

        case "FAINT":
        return event.side === "PLAYER"
            ? `Your Pokémon fainted!`
            : `Enemy Pokémon fainted!`

        case "SWITCH":
        case "STRATEGIC_SWITCH":
            return event.side === "PLAYER" ? `Go ${event.newPokemon.name}!` : `Enemy sent out ${event.newPokemon.name}`
        case "FINISH_BATTLE":
            return event.playerWin ? `All enemy team was fainted, You Win!` : `All your team was fainted, Try later again...`
    }
}