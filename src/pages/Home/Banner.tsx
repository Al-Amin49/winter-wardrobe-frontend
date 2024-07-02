import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import "../../styles/Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/img/banner/1.jpg";
import banner2 from "../../assets/img/banner/2.png";
import banner3 from "../../assets/img/banner/3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  // const onAutoplayTimeLeft = (_s:unknown, time:number, progress:number) => {
  //   if (progressCircle.current) {
  //     // Null check before accessing properties
  //     progressCircle.current.style.setProperty("--progress", String(1 - progress));
  //   }
  //   if (progressContent.current) {
  //     // Null check before accessing properties
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // };

  const bannerData=[
    {
      image: banner1,
      title: "Your $50 Donation Provides a Full Winter Outfit",
      description: "Let's come together to spread the warmth of compassion and generosity. Your simple act of donating gently used winter clothing can ignite a spark of hope in someone's life.",

    },
    {
      image: banner2,
      title: "Your $50 Donation Provides a Full Winter Outfit",
      description: "Let's come together to spread the warmth of compassion and generosity. Your simple act of donating gently used winter clothing can ignite a spark of hope in someone's life.",

    },
    {
      image: banner3,
      title: "Your $50 Donation Provides a Full Winter Outfit",
      description: "Let's come together to spread the warmth of compassion and generosity. Your simple act of donating gently used winter clothing can ignite a spark of hope in someone's life.",

    },
  ]
  return (
    <div>
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
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       {
        bannerData.map(data=>(
          <SwiperSlide>
          <img src={data.image} alt="" 
          loading="lazy"

          className=" w-[500px] h-[500px]"
          />
          <div className="absolute bottom-0 lg:bottom-auto ">
            <div>
            <h3 className="text-xl md:text-4xl lg:text-5xl  text-center font-extrabold text-white">
            {data.title}
            </h3>
            <p className="text-base md:text-lg lg:text-xl w-[50%] text-center  font-bold text-white py-3 lg:py-8">
              {data.description}
            </p>
            <Link to="/all-clothe">
            <button className="mb-4 lg:mb-0 btn btn-primary font-bold text-white">Donate Now</button>
            </Link>
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
    </div>
  );
};

export default Banner;
