import { useMutation } from "@tanstack/react-query";
import { savetask } from "../services/savetask.services";
export const useSavetask = () => {
  return useMutation({
    mutationFn: (formData: FormData) => savetask(formData),
  });
};