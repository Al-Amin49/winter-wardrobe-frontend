import { baseApi } from "./baseApi";

const donateApi= baseApi.injectEndpoints({

    endpoints:(builder)=>({
        addDonate:builder.mutation({
            query:(body)=>({
                url:'/donate',
                method:"POST",
                body
            }),
            invalidatesTags:['donate']
        }),
        getSingleDonate:builder.query({
            query:(id)=>({
                url:`/donate/${id}`,
                method:"GET",
            }),
            providesTags:['donate']
        }),
        getDonationsByCategory:builder.query({
            query:()=>({
                url:`/donate/category`,
                method:"GET",
            }),
            providesTags:['donate']
        }),
        getRecentDonation:builder.query({
            query:()=>({
                url:`/donate/recent`,
                method:"GET",
            }),
            providesTags:['donate']
        }),
        getAllDonation:builder.query({
            query:()=>({
                url:`/donate`,
                method:"GET",
            }),
            providesTags:['donate']
        }),
        getWhoMostDonate:builder.query({
            query:()=>({
            url: '/donate/leaderboard',
                method:"GET",
            }),
            providesTags:['donate']
        }),

    })
})

export const {
useAddDonateMutation,
useGetSingleDonateQuery,
useGetWhoMostDonateQuery,
useGetDonationsByCategoryQuery,
useGetRecentDonationQuery,
useGetAllDonationQuery
}= donateApi