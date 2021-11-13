import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    "Content-type": "application/json",
  },
});

export default apiClient;
