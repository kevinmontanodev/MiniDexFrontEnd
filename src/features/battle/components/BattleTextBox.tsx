import { useBattleStore } from "@/features/battle/store/useBattleStore"

export function BattleTextBox() {
    const message = useBattleStore(state => state.currentMessage)

    if (!message) return null

    return (
        <div className="absolute flex items-center justify-center pointer-events-none top-1 left-1 transition-all">
            <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-sm  text-white text-lg animate-fadeIn" key={message}>
                {message}
            </div>
        </div>
    )
}
