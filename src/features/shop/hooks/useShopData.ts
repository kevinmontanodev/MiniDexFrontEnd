import { useAlertStore } from "@/stores/useAlertStore"
import { useEffect, useState } from "react"
import type { DailyShopResponse } from "../types/shop.types"
import type { TrainerProfile } from "@/features/trainer/types/trainer.types"
import { getDailyShopState } from "../services/shop.service"
import { getTrainerProfile } from "@/features/trainer/services/trainer.service"

export function useShopData() {
    const [shopData, setShopData] = useState<DailyShopResponse | null>(null)
    const [trainer, setTrainer] = useState<TrainerProfile | null>(null)
    const [loading, setLoading] = useState(true)
    const {alert} = useAlertStore()

    useEffect(() => {
        loadAll()
    }, [])

    const loadAll = async () => {
        setLoading(true)

        try {
            const [shopRes, trainerRes] = await Promise.all([
                getDailyShopState(),
                getTrainerProfile()
            ])

            if (!shopRes.success || !shopRes.data){
                alert("Error Getting Envelopes", "Can't get shop data, try later...")
                return
            }

            if (!trainerRes.success || !trainerRes.data){
                alert("Error Getting Trainer Profile", "Can't get trainer Profile data, try later...")
                return
            }

            setShopData(shopRes.data)
            setTrainer(trainerRes.data)

        } catch {
            alert("Error", "Unexpected error loading shop")
        } finally {
            setLoading(false)
        }
    }

    return {
        shopData,
        trainer,
        loading
    }
}