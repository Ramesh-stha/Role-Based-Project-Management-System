import { useQuery } from "@tanstack/react-query"
import membercountservices from "../services/count.services"
import managercountservices from "../services/managercount.services";
import projectcountservices from "../services/projectcount.services";

export const usememberCount=()=>{
    return useQuery({
        queryKey:["countmember"],
        queryFn:membercountservices,
        
    });

}

export const usemanagerCount=()=>{
    return useQuery({
        queryKey:["countmanager"],
        queryFn:managercountservices,
        
    });

}
export const useprojectCount=()=>{
    return useQuery({
        queryKey:["countproject"],
        queryFn:projectcountservices,
        
    });

}