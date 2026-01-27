import { api, handleApiError } from "@/src/services/index";
const projectcountservices=async()=>{try{

    const res= await api.get("/count/projectcount");
    return res.data??[];
}
catch(error:any){
    handleApiError(error);
}
}

export default projectcountservices;