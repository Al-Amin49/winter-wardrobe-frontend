
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../components/Container";
import { useGetAllTestimonialQuery } from "../../redux/api/testimonialApi";
import Loading from "../../components/Loading";
import { TTestimonial } from "../../types";


const Testimonials = () => {
  const {data, isLoading}= useGetAllTestimonialQuery("");
  console.log(' testimonial data', data?.data)

    if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <Container>
        <h3 className="text-3xl font-bol text-primary text-center pt-20 pb-5">
          Testimonials
        </h3>
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
          className="mySwiper"
        >
          {data?.data.map((testimonial:TTestimonial) => (
            <SwiperSlide key={testimonial._id}>
              {/* You might want to adjust this part depending on the structure of your testimonials data */}
              <div className="bg-gradient-to-r from-green-500 to-black text-white p-6 mb-6">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-xl font-bold text-secondary ">{testimonial.user.username}</p>
                  <p className="text-lg font-medium my-2">{testimonial.location}</p>
                  <p className="text-base text-gray-300 ">{testimonial.message}</p>
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
