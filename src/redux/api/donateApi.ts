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
useGetWhoMostDonateQuery
}= donateApi