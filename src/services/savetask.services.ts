import { api } from "../services/index"

export const savetask = async(data:any)=>{
    const response = await api.post("/submittask",data);
    return response.data;
}   