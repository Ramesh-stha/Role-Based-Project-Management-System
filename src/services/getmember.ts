
import { api } from "@/src/services/index";

export const getMemberservices = async () => {
  try {
    const res = await api.get("/auth/getmember");

    return res.data ?? []; // ✅ ALWAYS return
  } catch (error) {
    console.error("Get member error:", error);
    throw error; // ✅ React Query needs this
  }
};

export const getManagerservices = async () => {
  try {
    const res = await api.get("/auth/getmanager");

    return res.data ?? []; // ✅ ALWAYS return
  } catch (error) {
    console.error("Get member error:", error);
    throw error; // ✅ React Query needs this
  }
};
