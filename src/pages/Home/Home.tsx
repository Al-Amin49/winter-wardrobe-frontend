import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Video from "./Video";
import Article from "./Article";
import AboutUs from "./AboutUs";
import RecentEvents from "./RecentEvents";
import ClothePost from "./ClothePost";
import ParallaxSection from "./Parallax";

const Home = () => {
  return (
    <div className="overflow-x-hidden ">
      <Banner />
      <ClothePost />
      <Article />
      <RecentEvents />
      <Video />
      <AboutUs />
      <ParallaxSection/>
      <Testimonials />
    </div>
  );
};

export default Home;
