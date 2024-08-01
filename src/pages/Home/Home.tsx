import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Video from "./Video";
import Article from "./Article";
import AboutUs from "./AboutUs";
import RecentEvents from "./RecentEvents";
import ClothePost from "./ClothePost";

const Home = () => {
  return (
    <div>
      <Banner />
      <ClothePost />
      <Article />
      <RecentEvents />
      <Video />
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default Home;
