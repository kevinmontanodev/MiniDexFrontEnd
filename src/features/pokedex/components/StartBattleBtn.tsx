import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { navigate } from "astro:transitions/client";

export function StartBattleBtn (){
    const launchBattle = async () => {

        const tl = gsap.timeline()
   
        tl.to('.overlay-pokedex', {zIndex: 100, opacity: 1, duration: 0.8})
        .call(() => {
            navigate("/trainers/battle")
        })
    }

    return (
        <>
            <Button onClick={launchBattle} customStyle="m-auto bg-white/20 flex mt-1.5 text-white">
                Go to battle
            </Button>
        </>
    )
}