import { api, handleApiError } from "@/src/services/index";
import { organizationSchema } from "../schemas/registerOrganization.schema";

//for creating organization
export const createOrganizationService = async (data: organizationSchema) => {
  const res = await api.post(
    "/OrganizationManagement/createOrganization",
    data
  );
  console.log("data Posted", data);
  return res.data;
};

//for getting all organization
export const getOrganizationService = async () => {
  try {
    const res = await api.get("/OrganizationManagement/getOrganization");
    return res.data;
  } catch (error: any) {
    console.error("Error fetching organizations.", error);
    throw new Error(error.message || "Failed to fetch organizations");
  }
};

//for getting organization by id
export const deleteOrganizationById = async (_id: string) => {
  try {
    const res = await api.delete(
      `/OrganizationManagement/deleteOrganization/${_id}`
    );
    return res.data;
  } catch (error: any) {
    return handleApiError(error)
  }
};
