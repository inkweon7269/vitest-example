'use client'

import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    credentials: 'include',
})

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Todos'],
    baseQuery,
    endpoints: (builder) => ({}),
})