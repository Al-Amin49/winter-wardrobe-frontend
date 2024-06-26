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
        })
    })

})

export const 
{useLoginMutation,
useRegisterMutation
}= userApi;