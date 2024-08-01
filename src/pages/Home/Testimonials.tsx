import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Pagination, Navigation } from "swiper/modules";
import Container from "../../components/Container";
import { useGetAllTestimonialQuery } from "../../redux/api/testimonialApi";
import Loading from "../../components/Loading";
import Subline from '../../components/Subline';
import { TTestimonial } from '../../types';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const { data, isLoading } = useGetAllTestimonialQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <h3 className="text-3xl font-bold text-primary text-center pt-20">
          Testimonials
        </h3>
        <div className='pb-5'>
          <Subline bgPrimary={false} />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.data.map((testimonial: TTestimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="bg-gray-200 text-white p-6 mb-6 rounded-lg shadow-md">
              <div>
              <div className="w-16 rounded-full text-center mx-auto">
              <img src={testimonial.profile}  alt="" />
              </div>
              <p className="text-xl font-bold text-primary mt-2">
                    {testimonial.username}
                  </p>
              </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-lg font-medium my-2 text-primary">
                    {testimonial.location}
                  </p>
                  <p className="text-base text-black">
                    {testimonial.message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Testimonials;
