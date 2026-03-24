import api from "./axiosInstance.ts";

export const getStarships = () => api.get(`starships`);
