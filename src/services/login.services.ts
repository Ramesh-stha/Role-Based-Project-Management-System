import axios from "axios";
import {api, handleApiError} from "../services/index"
export const loginService = async (data: { email: string; password: string }) => {
  const res = await axios.post("api/auth/login", data);

  return res.data;
};



export const logout =async()=>{
  try{ 
    const response =await api.post("api/auth/logout");
  return response.data;
  }
  catch(error){
    throw handleApiError(error as Error);
  }
}