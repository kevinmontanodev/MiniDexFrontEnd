import { TrainerProfileResponse } from "../types/trainer.types"

export const updateTrainerData = async (name: string, username:string) => {
    try {
        const res = await fetch("/api/trainer/update", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, username })
        })
        
        const data = await res.json()

        if (res.ok){
            return {trainer : data, success: true}
        }
        
        return {success: false, message: data.message || "Failed to update trainer"}
    } catch (error) {
        return {success: false, message: "Server connection error"}
    }
}

export const getTrainerProfile = async () : Promise<TrainerProfileResponse> => {
    try {
        const res = await fetch("/api/trainer", {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        
        const data = await res.json()

        if (res.ok){
            return { data: data, success: true}
        }
        
        return {success: false, message: data.message || "Failed to update trainer"}
    } catch (error) {
        return {success: false, message: "Server connection error"}
    }
}