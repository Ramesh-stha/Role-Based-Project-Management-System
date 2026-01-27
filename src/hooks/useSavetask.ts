import { useMutation } from "@tanstack/react-query";
import { savetask } from "../services/savetask.services";
import { useQueryClient } from "@tanstack/react-query";
export const useSavetask = () => {
  const queryClient=useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => savetask(formData),
      onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[""],
      })
    }
  });
};

