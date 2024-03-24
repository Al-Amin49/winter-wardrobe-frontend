// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Container from "../../components/Container";
import { useEffect, useState } from "react";

type TTestimonial={
  _id:string,
  name:string,
  details:string,
  image:string
}
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("testimonials.json");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchData();
  }, []);
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
          {testimonials.map((testimonial:TTestimonial) => (
            <SwiperSlide key={testimonial._id}>
              {/* You might want to adjust this part depending on the structure of your testimonials data */}
              <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-6 place-items-center ">
                <div className=" flex flex-col justify-center items-center">
                  <p className="text-xl font-bold ">{testimonial.name}</p>
                  <p>{testimonial.details}</p>
                </div>
                <div className="">
                  <div >
                    <img src={testimonial.image}  className=" w-full rounded-[50%]"  />
                  </div>
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
