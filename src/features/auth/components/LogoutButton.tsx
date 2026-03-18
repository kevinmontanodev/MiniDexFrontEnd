import { authLogout } from "../services/auth.service";
import { navigate } from "astro:transitions/client";
import { useAlertStore } from "@/stores/useAlertStore";

export function LogoutButton() {
    const {alert} = useAlertStore()

    const logout = async () => {
        const res = await authLogout()

        if (res.success){
            navigate("/login")
            return
        }

        alert("Logout Error", res.message)
    }

    return (
        <button onClick={logout} title="Log out from your account" className="hover:bg-zinc-200/30 px-2  rounded-sm transition-all cursor-pointer">
            Log out
        </button>
    )
}