import { axiosAuthInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

type logedInUserResponse = {
  id: string;
  username: string;
  password: string;
  isLogin: boolean;
  avatar: string;
  createdAt: string;
};

export const useLogedInUser = () => {
  const [logedInUser, setLogedInUser] = useState<logedInUserResponse>();

  useEffect(() => {
    const fetchLogedInUser = async () => {
      const userId = JSON.parse(localStorage.getItem("user") || "null");

      try {
        if (userId !== null) {
          const res = await axiosAuthInstance.get(`users/${userId}`);
          setLogedInUser(res.data);
        }
      } catch (error) {
        console.log((error as TypeError).message);
      }
    };
    fetchLogedInUser();
  }, []);
  return { logedInUser };
};
