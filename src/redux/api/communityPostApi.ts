import { baseApi } from './baseApi';


const communityPostApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllCommunityPost:builder.query({
            query:()=>({
                url:'/communities',
                method:"GET"
            }),
            providesTags:['communitypost']
        }),
        addCommunityPost:builder.mutation({
            query:(body)=>({
                url:'/communities',
                method:"POST",
                body
            }),
            invalidatesTags:['communitypost']
        }),
    })
})

export const{
    useAddCommunityPostMutation,
    useGetAllCommunityPostQuery
} = communityPostApi;