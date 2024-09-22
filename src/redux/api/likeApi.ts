import { baseApi } from "./baseApi";

const likeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to toggle like on a post
    toggleLike: builder.mutation({
      query: (postId) => ({
        url: `/communities/${postId}/like`, 
        method: 'POST',
      }),
      invalidatesTags: ['postLikes'], 
    }),
    
    // Endpoint to get all likes for a specific post
    getAllLikes: builder.query({
      query: (postId) => ({
        url: `/communities/${postId}/likes`,
        method: 'GET',
      }),
      providesTags: ['postLikes'], 
    }),
  }),
});

export const {
  useToggleLikeMutation, 
  useGetAllLikesQuery,  
} = likeApi;
