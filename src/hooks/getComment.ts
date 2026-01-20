import { useQuery } from "@tanstack/react-query";
import { getCommentServices } from "../services/getcomment.services";

export const useGetComment=()=>{
    return useQuery({
        queryKey:["comments"],
        queryFn:getCommentServices,
    });
};