import { useAlertStore } from "@/stores/useAlertStore"
import { useEffect, useState } from "react"
import { EnvelopesContainer } from "./EnvelopesContainer"
import { getEnvelopeStatus } from "../services/packs.service"
import { PokemonCardSkeleton } from "@/components/skeletons/PokemonCardSkeleton"

export function DailyEnvelopesWrapper(){
    const [initialAmount, setInitialAmount] = useState<number | null>(null)
    const {alert} = useAlertStore()

    useEffect(() => {
        getPacks()
    }, [])

    const getPacks = async () => {
        const res = await getEnvelopeStatus()

        if (!res.success || res.numEnvelopes === undefined){
            alert("Error Getting Envelopes", "Can't get daily envelopes, try later...")
            return
        }

        setInitialAmount(res.numEnvelopes)
    }
    return !initialAmount 
            ? <PokemonCardSkeleton heigth="h-64" width="w-full" /> 
            : <EnvelopesContainer initialAmount={initialAmount} />
}