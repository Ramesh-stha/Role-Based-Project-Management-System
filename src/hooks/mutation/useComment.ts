
import { commentServices } from "@/src/services/comment.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentServices,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
};
