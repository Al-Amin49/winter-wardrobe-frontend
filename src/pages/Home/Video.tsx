import Container from '../../components/Container';
import donateCover from '../../assets/img/donateCover.png';
import donateVideo from '../../assets/img/donation.mp4'
import { Link } from 'react-router-dom';
import Subline from '../../components/Subline';
const Video = () => {
  return( 
  <div>
    <Container >
        <div className="container mx-aut text-center">
        <h3 className="text-3xl font-bold text-primary text-center pt-20">
          Donatin Drive
        </h3>
        <div className='pb-5'>
          <Subline bgPrimary={false} />
        </div>
            <div className="relative flex items-center justify-center">
                <video className="w-full rounded-3xl"
                autoPlay muted loop playsInline poster={donateCover}
                >
                    <source 
                    src={donateVideo}
                    type='video/mp4'
                    ></source>
                </video>
                <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
               <div className='absolute'>
               <p className=" text-xl text-white mb-2 font-bold tracking-tighter lg:text-3xl">
                Become a Volunteer
                </p>
                <Link to="/volunteer">
                <button
                className="btn btn-primary text-white"
              >
               Register Now
              </button>
                </Link>
               </div>
        </div>
        </div>
    </Container>

  </div>)
};

export default Video;
