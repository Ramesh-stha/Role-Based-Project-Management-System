import { Deleteservices } from "@/src/services/deleteproject.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (_id: string) => Deleteservices(_id),
    onSuccess: () => {
      // Invalidate project query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["project"] });
    },
    onError: (error: any) => {
      console.error("Delete failed:", error);
    },
  });
};

export default useDelete;
