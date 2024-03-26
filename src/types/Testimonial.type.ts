type TTestimonialUser={
    username: string;
  }
  export type TTestimonial={
    _id:string,
    user:TTestimonialUser,
    message:string,
    location:string
  }