import { useAlertStore } from "@/stores/useAlertStore";
import { useMiniDexStore } from "@/stores/useMiniDexStore";
import { useEffect, useState, type ChangeEvent } from "react";
import { getTrainerProfile, updateTrainerData } from "../services/trainer.service";
import type { UserData, UseTrainerReturn } from "../types/trainer.types";

export function useTrainer() : UseTrainerReturn {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState<UserData>({name: "", username: ""});
    const setTrainer = useMiniDexStore(state => state.setTrainer) 
    const trainer = useMiniDexStore(state => state.trainer)
    const {alert} = useAlertStore()
    const [caughtPokemons, setCaughtPokemons] = useState(0)

    useEffect(() => {
        getTrainerData()
    }, [])

    const getTrainerData = async () => {
        const res = await getTrainerProfile()
    
        if (!res.success || !res.data){
            alert("Error Getting Trainer Profile", "Can't get trainer Profile data, try later...")
            return
        }

        const {caughtPokemons, ...trainerData} = res.data
        setCaughtPokemons(caughtPokemons)
        setTrainer({...trainerData})
    
        setUserData({name: trainerData.name, username: trainerData.username})
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const updateTrainer = async () => {
        if (userData.name == "" || userData.username == "") {
            alert("Validation error", "Please fill all fileds")
            return 
        }
        
        const result = await updateTrainerData(userData.name, userData.username)

        if (!result.success) {
            alert("Error updating data", result.message || "")
            return
        }

        setTrainer({username: userData.username, name: userData.name})
        setShowModal(false)
        alert("Updated Trainer", "Data successfully updated")
    }

    const openModal = () => {
        if (trainer) {
            setUserData({name: trainer.name, username: trainer.username})
        }
        setShowModal(true)
    }

    const closeModal = () => setShowModal(false)
     
    return {
        updateTrainer,
        handleChange,
        openModal,
        showModal,
        caughtPokemons,
        userData,
        closeModal,
        trainer
    }
}