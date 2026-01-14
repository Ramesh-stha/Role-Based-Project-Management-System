import { useQuery } from "@tanstack/react-query";
import { getOrganizationService } from "@/src/services/organization.services";

export const useGetOrganization = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: getOrganizationService,
  });
};
