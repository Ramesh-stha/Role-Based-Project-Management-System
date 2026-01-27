"use client"
import { gettaskservices } from "@/src/services/gettask.services";
import { useQuery } from "@tanstack/react-query";

export const useGetTask=()=>{
    return useQuery(
        {
            queryKey:["task"],
            queryFn:gettaskservices,
        }
    );
}