import { EnvelopesContainer } from "@/features/packs/components/EnvelopesContainer";
import { TrainerInfo } from "@/features/trainer/components/TrainerInfo";
import { StoreCardPokemon } from "./StoreCardPokemon";
import { useEffect, useState } from "react";
import { getDailyShopState } from "../services/shop.service";
import { useAlertStore } from "@/stores/useAlertStore";
import type { DailyShopResponse } from "../types/shop.types";
import { PokemonCardSkeleton } from "@/components/skeletons/PokemonCardSkeleton";
import type { TrainerProfile } from "@/features/trainer/types/trainer.types";
import { getTrainerProfile } from "@/features/trainer/services/trainer.service";

export function ShopWrapper(){
    const [shopData, setShopData] = useState<DailyShopResponse | null>(null)
    const [trainer, setTrainer] = useState<TrainerProfile | null>(null)
    const {alert} = useAlertStore()

    useEffect(() => {
        loadShopData()
        getTrainerData()
    }, [])
    

    const loadShopData = async () => {
        const res = await getDailyShopState()

        if (!res.success || !res.data){
            alert("Error Getting Envelopes", "Can't get shop data, try later...")
            return
        }

        setShopData(res.data)
    }

    const getTrainerData = async () => {
        const res = await getTrainerProfile()

        if (!res.success || !res.data){
            alert("Error Getting Trainer Profile", "Can't get trainer Profile data, try later...")
            return
        }

        setTrainer(res.data)
    }

    return (
        <section className="max-w-3xl bg-white/10 mx-auto rounded-md p-4 mt-2 flex gap-2">
            {shopData 
            ? <StoreCardPokemon specialPokemon={shopData.specialPokemon} specialPokemonPrice={shopData.specialPokemonPrice} specialPokemonPurchased={shopData.specialPokemonPurchased} />
            : <PokemonCardSkeleton width="w-60" heigth="h-70" animate />}
            <div className="flex flex-col w-full">

                {trainer 
                ? <TrainerInfo trainerResponse={trainer} />
                : <PokemonCardSkeleton width="min-w-[250px] w-full" heigth="h-auto" animate/>}

                {shopData 
                ? <EnvelopesContainer initialAmount={shopData.boostersRemaining} packPrice={shopData.boosterPrice} emptyMessage="There are no more envelopes to buy, come back tomorrow." />
                : <PokemonCardSkeleton heigth="h-64" width="w-full" animate />}
            </div>
        </section>
    )
}