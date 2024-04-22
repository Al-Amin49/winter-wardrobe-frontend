import Subline from "../../components/Subline";
import Container from "../../components/Container";
import volunteer from "../../utils/lottie/volunteer.json";
import { LottieAnimationOptions } from "@/types";
import { useLottie } from "lottie-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import VolunteerCard from "./VolunteerCard";
const Volunteer = () => {
  // Volunteer animation options
  const options = {
    animationData: volunteer,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options as LottieAnimationOptions, {
    height: 400,
  });

  return (
    <Container>
      <div className="pt-20 pb-10">
        <h3 className="text-2xl lg:text-4xl text-center text-secondary font-bold">
          Get Involved: Volunteer with Us
        </h3>
        <Subline bgPrimary={true} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center mt-5">
          <div>{View}</div>
          <div>
            <h2 className="text-3xl text-primary font-bold">
             Our Mission
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-10">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <VolunteerCard
                    title="Community-Driven Initiative"
                    description="Winter Wardrobe is a community-driven initiative dedicated to providing warm clothing to those in need during the winter season."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <VolunteerCard
                    title="Make a Real Difference"
                    description="With the support of volunteers like you, we can make a real difference in the lives of individuals and families facing cold weather without adequate clothing."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <VolunteerCard
                    title="Mission & Goals"
                    description="Our mission is to gather donations of warm clothing items such as coats, sweaters, hats, gloves, and blankets, and distribute them to vulnerable communities."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <VolunteerCard
                    title="Spread Warmth & Compassion"
                    description="By joining us, you'll be part of a team that spreads warmth and compassion, ensuring that no one is left out in the cold."
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
};


export default Volunteer;
