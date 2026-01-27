import {api, handleApiError} from "@/src/services/index"

const membercountservices=async()=>{try{

    const res= await api.get("/count/membercount");
    return res.data??[];
}
catch(error:any){
    handleApiError(error);
}
}

export default membercountservices;
