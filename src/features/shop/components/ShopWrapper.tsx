import { EnvelopesContainer } from "@/features/packs/components/EnvelopesContainer";
import { TrainerInfo } from "@/features/trainer/components/TrainerInfo";
import { StoreCardPokemon } from "./StoreCardPokemon";
import { useShopData } from "../hooks/useShopData";
import { FullShopSkeleton } from "@/components/skeletons/FullShopSkeleton";

export function ShopWrapper(){
    const {shopData, trainer, loading} = useShopData()

    if (loading){
        return <FullShopSkeleton/>
    }

    if (!shopData || !trainer) return null

    return (
        <section className="max-w-3xl bg-white/10 mx-auto rounded-md p-4 mt-2 flex gap-2">
            <StoreCardPokemon specialPokemon={shopData.specialPokemon} specialPokemonPrice={shopData.specialPokemonPrice} specialPokemonPurchased={shopData.specialPokemonPurchased} />
            <div className="flex flex-col w-full gap-0.5">
                <TrainerInfo trainerResponse={trainer} />

                <EnvelopesContainer initialAmount={shopData.boostersRemaining} packPrice={shopData.boosterPrice} emptyMessage="There are no more envelopes to buy, come back tomorrow." />
            </div>
        </section>
    )
}