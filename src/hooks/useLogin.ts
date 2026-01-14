"use client";

import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/login.services";
import { useQueryClient } from "@tanstack/react-query";

import {logout} from "../services/login.services"
import { useRouter } from "next/navigation";
import { api } from "../services";
export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationKey:["login"],
    mutationFn: loginService,
    onSuccess: (data:any) => {
      const role = data.user.role;
    },
  });
  
};