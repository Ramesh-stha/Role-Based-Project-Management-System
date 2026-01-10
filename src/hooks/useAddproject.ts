import { useMutation, useQuery } from "@tanstack/react-query";
import { addProjectService,getProjectService } from "@/src/services/addproject.services";

export const useAddProject = () => {
  return useMutation({
    mutationFn: (formData: FormData) => addProjectService(formData),
  });
};
const useGetProject = () => {
  return useQuery({
    queryKey:['projects'],
    queryFn:()=>getProjectService(),
  });
};

export default useGetProject;