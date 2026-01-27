import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProjectService, getProjectService, GetProjectbyId,updateProjectStatusService } from "@/src/services/addproject.services";


export const useAddProject = () => {
  const queryClient =useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => addProjectService(formData),
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:[""],
      })
    }
  });
};

//for getting project data
const useGetProject = () => {
  
   const queryClient =useQueryClient();
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
   const queryClient =useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateProjectStatusService(id, status),
      onSuccess:()=>{
     queryClient.invalidateQueries({
        queryKey: ["projects"],
      })
    }
  });
  
};
