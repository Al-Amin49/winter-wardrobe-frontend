import { baseApi } from "./baseApi";

const clotheApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllClothes:builder.query({
            query:({ page = 1, limit = 5 })=>({
                url:`/clothes?page=${page}&limit=${limit}`,
                method:'GET',
            }),
            providesTags:['clothes']
        }),
        getSingleClothes:builder.query({
            query:(id)=>({
                url:`/clothes/${id}`,
                method:'GET',
            }),
            providesTags:['clothes']
        }),
        addClothes:builder.mutation({
            query:(body)=>({
                url:'/clothes',
                method:'POST',
                body
            }),
            invalidatesTags:['clothes']
        }),
        updateClothes:builder.mutation({
            query:({id, body})=>({
                url:`/clothes/${id}`,
                method:'PUT',
                body
            }),
            invalidatesTags:['clothes']
        }),
        deleteClothe:builder.mutation({
            query:(id)=>({
                url:`/clothes/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['clothes']
        })
    })
})

export const {
    useGetAllClothesQuery,
    useGetSingleClothesQuery,
    useAddClothesMutation,
    useUpdateClothesMutation,
    useDeleteClotheMutation
}= clotheApi;