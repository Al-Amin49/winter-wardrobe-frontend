import { baseApi } from "./baseApi";



export const testimonialApi= baseApi.injectEndpoints({
    endpoints:(builder)=>({
        postTestimonial:builder.mutation({
            query:(data)=>({
                url:'/testimonial',
                method:'POST',
                body:data
            }),
            invalidatesTags:['testimonial']
        }),
        getAllTestimonial:builder.query({
            query:()=>({
                url:'/testimonial',
                method:'GET',
          
            }),
            providesTags:['testimonial']
        })
    })

})

export const 
{
    useGetAllTestimonialQuery,
    usePostTestimonialMutation
}= testimonialApi;