import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { addProjectService, getProjectService, GetProjectbyId,updateProjectStatusService } from "@/src/services/addproject.services";


export const useAddProject = () => {
  return useMutation({
    mutationFn: (formData: FormData) => addProjectService(formData),
    onSuccess:()=>{
      QueryClient
    }
  });
};

//for getting project data
const useGetProject = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjectService,
  });
};

export default useGetProject;

export const useGetProjectbyId = (id: string) => {
  console.log("id is", id);
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => GetProjectbyId(id),
  });
};

export const useUpdateProjectStatus = () => {
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateProjectStatusService(id, status),
  });
};
