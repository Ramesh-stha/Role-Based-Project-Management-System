import {api, handleApiError} from "@/src/services/index";

export const Deleteservices = async (_id: string) => {
  try {
    const res = await api.delete(`/deleteProject/${_id}`);
    return res.data;
  } catch (error: any) {
    
    return handleApiError(error)
  }
};