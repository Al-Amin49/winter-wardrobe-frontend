import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


// Create baseQuery with prepareHeaders for authorization
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://winter-ward.vercel.app/api/v1/',
  prepareHeaders: (headers, { getState }) => {
    const userInfo = (getState() as RootState).auth.userInfo as { data: { token: string } } | null;
    const token = userInfo?.data.token;
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
  
    return headers;
  },
});



// Create baseApi using createApi
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["clothes"]
});
