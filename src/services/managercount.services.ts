import { api, handleApiError } from "@/src/services/index";
const managercountservices=async()=>{try{

    const res= await api.get("/count/managercount");
    return res.data??[];
}
catch(error:any){
    handleApiError(error);
}
}

export default managercountservices;