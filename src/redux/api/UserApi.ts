import { baseApi } from "./baseApi";

export const userApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:'/users/login',
                method:'POST',
                body:data
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:'/users/register',
                method:'POST',
                body:data
            })
        }),
        getAllUsers:builder.query({
            query:()=>({
                url:'/users/allusers',
                method:'GET',
            }),
            providesTags:['user']
        }),
    })

})

export const 
{useLoginMutation,
useRegisterMutation,
useGetAllUsersQuery
}= userApi;