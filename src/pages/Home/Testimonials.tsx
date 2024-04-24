import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../components/Container";
import { useGetAllTestimonialQuery } from "../../redux/api/testimonialApi";
import Loading from "../../components/Loading";
import Subline from '../../components/Subline';
import { Rating } from '@smastrom/react-rating'
import {TTestimonial} from '../../types';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const { data, isLoading } = useGetAllTestimonialQuery("");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Container>
        <h3 className="text-3xl font-bol text-primary text-center pt-20 ">
          Testimonials
        </h3>
        <div className='pb-5'>
      <Subline bgPrimary={false}/>
      </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper "
        >
          {data?.data.map((testimonial: TTestimonial) => (
            <SwiperSlide key={testimonial._id}>
              {/* You might want to adjust this part depending on the structure of your testimonials data */}
              <div className="bg-orange-400  text-white p-6 mb-6">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-xl font-bold text-primary ">
                    {testimonial.username}
                  </p>
                  <p className="text-lg font-medium my-2">
                    {testimonial.location}
                  </p>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={testimonial.rating}
                    readOnly
                  />
                  <p className="text-base text-gray-300 ">
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
