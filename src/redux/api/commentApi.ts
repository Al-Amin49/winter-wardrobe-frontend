import { baseApi } from './baseApi';


const commentApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllComments:builder.query({
            query:(postId)=>({
                url:`/communities/${postId}/comments`,
                method:"GET"
            }),
            providesTags:['comments']
        }),
        addComments:builder.mutation({
            query:(postId)=>({
                url:`/communities/${postId}/comments`,
                method:"POST",
            }),
            invalidatesTags:['comments']
        }),
        updateComments:builder.mutation({
            query:({body, postId, commentId})=>({
                url:`/communities/${postId}/comments/${commentId}`,
                method:"PUT",
                body
            }),
            invalidatesTags:['comments']
        }),
        deleteComments:builder.mutation({
            query:({ postId, commentId})=>({
                url:`/communities/${postId}/comments/${commentId}`,
                method:"DELETE",
                
            }),
            invalidatesTags:['comments']
        }),
    })
})

export const{
  useGetAllCommentsQuery,
  useAddCommentsMutation,
  useUpdateCommentsMutation,
  useDeleteCommentsMutation
} = commentApi;