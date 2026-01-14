import { useQuery } from "@tanstack/react-query";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string
}

const fetchUser = async (): Promise<User> => {
  const res = await fetch("/api/auth/user"); // token sent automatically via cookies
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch user");
  return data.user;
};

export const useUser = () => {
  return useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5,
  });
};
