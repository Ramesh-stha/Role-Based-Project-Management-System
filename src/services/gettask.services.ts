import {api} from "@/src/services/index"

export const gettaskservices=async()=>{
    const res= await api.get("/gettask",{});
    return res.data
}