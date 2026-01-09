import axios,{AxiosError} from "axios";

const BASE_API_URL=process.env.NEXT_PUBLIC_BASE_URL;

if(!BASE_API_URL){
    throw new Error("Base URL is not defined");

}

export const api = axios.create({
    baseURL:BASE_API_URL,
    withCredentials:true,
});

//error handling
export const handleApiError =(error:AxiosError | Error): Error=>{
    if(axios.isAxiosError(error)){
        const message=error.response?.data?.message || "AN Error occurred on the server";
        return new Error(message);

    }
    return new Error(error.message ||"An Unknown error occurred");
}

api.interceptors.response.use(
    (response)=> response,
    (error)=>{
        throw handleApiError(error);
    }
);