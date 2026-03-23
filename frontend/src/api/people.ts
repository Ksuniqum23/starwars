import api from "./axiosInstance.ts";

export const getAllPeople = () => api.get(`people`);
