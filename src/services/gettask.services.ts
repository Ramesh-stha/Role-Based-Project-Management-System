import {api} from "@/src/services/index"

export const gettask=async()=>{
    const res= await api.get("/gettask",{});
    return res.data
}