import { api, handleApiError } from "@/src/services";

export const commentServices = async (text: string) => {
  try {
    const res = await api.post("/comment", { text });
    return res.data;
  } catch (error: any) {
    throw handleApiError(error);
  }
};
