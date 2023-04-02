import axios, { AxiosInstance } from "axios";
import qs from "qs";
import { useMemo } from "react";

import { envConfig } from "../config/envConfig";

let axiosInstance: AxiosInstance | null = null;

const customAxiosEnv = axios.create({
  withCredentials: process.env.NODE_ENV === "production",
  baseURL: envConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: {
    encode: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
  },
});

export const customAxios = () => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = customAxiosEnv;
  return axiosInstance;
};

export const useAxiosEnvironment = () =>
  useMemo(() => {
    customAxios();
  }, []);
