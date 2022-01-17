import axios, { AxiosResponse } from "axios";

export type RejectedError = { response: AxiosResponse };

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: RejectedError) => {
    const { status, config } = error.response;
    const isRequestRefreshTokens = config.url?.includes("/refresh-tokens");
    if (status === 401 && !isRequestRefreshTokens) {
      // request refresh tokens
    } else if (status === 401 && isRequestRefreshTokens) {
      // request logout
      // redirect login
    } else {
      throw error;
    }
  }
);
