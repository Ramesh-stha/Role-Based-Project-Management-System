import { useState } from "react";
import { registerUser, RegisterPayload } from "@/src/services/authService";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const register = async (user: RegisterPayload) => {
    setLoading(true);
    setError(null);

    try {
        const data = await registerUser(user);
        setLoading(false);
        return data;
    } catch (error:any) {
        setLoading(false);
        setError(error.response?.data?.message || "Something unexpected happen.");
        throw error;
    }
  };
  return{register,loading,error};
};