import { useQuery } from "@tanstack/react-query";
import { getMemberservices,getManagerservices } from "../services/getmember";

export const useGetMember = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getMemberservices,
  });
};

export const useGetManager = () => {
  return useQuery({
    queryKey: ["manager"],
    queryFn: getManagerservices,
  });
};
