import {api, handleApiError} from "@/src/services/index"

export const getCommentServices=async()=>{
    try{
        const res = await api.get("/getcomment",{});
        return res.data;

    }catch(error:any){
        handleApiError(error);
    }
}