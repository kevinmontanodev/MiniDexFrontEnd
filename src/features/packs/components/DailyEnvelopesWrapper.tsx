import { useAlertStore } from "@/stores/useAlertStore"
import { useEffect, useState } from "react"
import { EnvelopesContainer } from "./EnvelopesContainer"
import { getEnvelopeStatus } from "../services/packs.service"

export function DailyEnvelopesWrapper(){
    const [initialAmount, setInitialAmount] = useState(0)
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
    return (
        <EnvelopesContainer initialAmount={initialAmount} />
    )
}