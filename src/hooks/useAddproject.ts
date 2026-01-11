import { useMutation, useQuery } from "@tanstack/react-query";
import { addProjectService, getProjectService, GetProjectbyId } from "@/src/services/addproject.services";


export const useAddProject = () => {
  return useMutation({
    mutationFn: (formData: FormData) => addProjectService(formData),
  });
};


///for getting project data
const useGetProject = () => {
  return useQuery({
    queryKey:['projects'],
    queryFn:()=>getProjectService(
    ),
  });
};

export default useGetProject;

export const useGetProjectbyId = (id:string) => {
  console.log("id is", id)
  return useQuery({
    queryKey:["project", id],
    queryFn:()=>GetProjectbyId(id)
  });
};