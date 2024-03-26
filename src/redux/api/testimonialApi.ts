import { baseApi } from "./baseApi";



export const testimonialApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        postTestimonial:builder.mutation({
            query:(data)=>({
                url:'/testimonial',
                method:'POST',
                body:data
            })
        }),
        getAllTestimonial:builder.query({
            query:()=>({
                url:'/testimonial',
                method:'GET',
          
            })
        })
    })

})

export const 
{
    useGetAllTestimonialQuery,
    usePostTestimonialMutation
}= testimonialApi;