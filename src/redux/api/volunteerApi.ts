import { baseApi } from "./baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteers"],
    }),
    getAllVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["volunteers"],
    }),
  }),
});
export const { useAddVolunteerMutation, useGetAllVolunteersQuery } =
  volunteerApi;
