import { PokemonCardSkeleton } from "./PokemonCardSkeleton";

export function FullShopSkeleton(){
    return (
        <section className="max-w-3xl bg-white/10 mx-auto rounded-md p-4 mt-2 flex gap-2">
            <PokemonCardSkeleton width="w-60" heigth="h-70" animate />
            <div className="flex flex-col w-full gap-1">
                <PokemonCardSkeleton width="min-w-[250px] w-full" heigth="h-auto" animate/>
        
                <PokemonCardSkeleton heigth="h-64" width="w-full" animate />
            </div>
        </section>
    )
}