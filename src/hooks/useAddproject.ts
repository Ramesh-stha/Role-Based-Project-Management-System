import { useMutation } from "@tanstack/react-query";
import { addProjectService } from "@/src/services/addproject.services";

export const useAddProject = () => {
  return useMutation({
    mutationFn: (formData: FormData) => addProjectService(formData),
  });
};
