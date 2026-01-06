import {useState} from "react";
import {LoginPayload,loginUser} from "@/src/services/authService";

export const useLogin = () =>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);

    const login = async(user: LoginPayload) =>{
        setLoading(false);
        setError(null);
       try {
        const data = await loginUser( user);
        setLoading(false);
        return(data);
       } catch (error:any) {
        setLoading(false);
        setError(error.response?.data?.message);
        throw error;
       }
    };
    return {login,loading,error};
}