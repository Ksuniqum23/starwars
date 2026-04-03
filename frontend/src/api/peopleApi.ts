import api from "./axiosInstance.ts";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const getAllPeople = () => api.get(`people`);

export const peopleApi = createApi({
    reducerPath: "people",
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({

    })

})
