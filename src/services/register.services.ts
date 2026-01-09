import { api } from "../services/index"

export const registerUser = async(payload: any)=>{
    const response = await api.post("/auth/register", payload);
    return response.data;
}   