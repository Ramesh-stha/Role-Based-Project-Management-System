import {
  createOrganizationService,
  deleteOrganizationById,
} from "@/src/services/organization.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

//hoook to mutate the add organization
export const useAddOrganization = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["organization"],
    mutationFn: (data: any) => createOrganizationService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
    },
  });
};

//hook to mutate the delete operation
export const useDeleteOrganization = () => {

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["organization"],
    mutationFn: (data: any) => deleteOrganizationById(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["organizations"],
      });
    },
  });
};
