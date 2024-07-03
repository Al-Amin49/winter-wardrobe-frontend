import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import "../../styles/Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/img/banner/banner.png";
import banner2 from "../../assets/img/banner/2-removebg-preview.png";
import banner3 from "../../assets/img/banner/21.png";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const [text] = useTypewriter({
    words: [
      "a full winter outfit",
      "warm meals for a month",
      "shelter for a night",
    ],
    loop: 0,
    delaySpeed: 2000,
  });

  const bannerData = [
    {
      image: banner1,
      title: "Your $50 Donation Provides ",
      description: "Let's come together to spread the warmth of compassion and generosity.",

    },
    {
      image: banner2,
      title: "Your $50 Donation Provides ",
      description: "Let's come together to spread the warmth of compassion and generosity.",

    },
    {
      image: banner3,
      title: "Your $50 Donation Provides ",
      description: "Let's come together to spread the warmth of compassion and generosity.",

    },
  ]
  return (
    <Container >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          bannerData.map(data => (
            <SwiperSlide >

              <div className="mt-24 flex flex-col lg:flex-row justify-evenly  items-center lg:h-[450px] ">
                <div className="">
                  <h3 className="text-xl md:text-3xl w-[90%] mx-auto   font-extrabold text-primary">
                    {data.title}
                    <span className="text-secondary">
                      {text}
                      <Cursor cursorStyle="|" />
                    </span>
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl w-[80%] mx-auto   font-bold  py-3 lg:py-8">
                    {data.description}
                  </p>
                  <Link to="/all-clothe">
                    <button className="mb-4 lg:mb-0 btn btn-primary font-bold text-white">Donate Now</button>
                  </Link>
                </div>

                <div>
                  <img src={data.image} alt=""
                    loading="lazy"

                    className="w-[500px] h-[500px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))
        }



        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Container>
  );
};

export default Banner;
