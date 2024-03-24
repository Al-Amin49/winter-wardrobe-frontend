import Banner from "./Banner";
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Article from './Article';
import AboutUs from './AboutUs';
import RecentEvents from "./RecentEvents";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Article/>
            <RecentEvents/>
            <Gallery/>
            <AboutUs/>
            <Testimonials/>
        </div>
    );
};

export default Home;