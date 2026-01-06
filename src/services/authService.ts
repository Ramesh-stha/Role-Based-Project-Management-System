
import axios from "axios";

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

const API_URI = ""; // should be defined in .env file

//register user
export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await axios.post(`${API_URI}/register`, payload);
  return data;
};

//login user
export const loginUser = async (payload: LoginPayload) => {
  const { data } = await axios.post(`${API_URI}/login`, payload);
  return data;
};
