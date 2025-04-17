// src/hooks/useAxiosAuth.ts
import axios from "axios";

const useAxiosAuth = () => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return axiosInstance;
};

export default useAxiosAuth;
