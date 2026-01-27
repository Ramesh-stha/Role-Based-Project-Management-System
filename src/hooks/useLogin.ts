import { useQuery, useMutation } from "@tanstack/react-query";
import { loginService,getUserService } from "../services/login.services";
import { useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { login } from "@/src/actions/auth.actions";
import { api } from "../services";


export const useLogin = () => {
  const router = useRouter();
const queryClient=useQueryClient();
  return useMutation({
    
    mutationKey:['login'],
    mutationFn:(data:{email: string, password: string})=> login(data),
    onSuccess: (data:any) => {
      const role = data.user.role;
      console.log("role is", role);
      queryClient.invalidateQueries();
      
    },

    onError(error) {
        console.log("error is", error);
    },
  });
  
};
const useGetdata=()=>{
  return useQuery({
    queryKey:[],
    queryFn:()=>getUserService(),

  })

}