import { useMutation } from "@tanstack/react-query";
import {api} from "../services/index"
import { registerUser } from "../services/register.services";
export function useRegister(){
    return useMutation({
        mutationFn:(data :any)=>registerUser(data),
        
    })
}

