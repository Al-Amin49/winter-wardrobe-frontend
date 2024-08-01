import {motion} from 'framer-motion'
import Subline from '../../components/Subline';
import { useLottie } from "lottie-react";
import mission from '../../utils/lottie/mission.json';
import { LottieAnimationOptions } from '@/types';
// import about from '../../assets/img/about.jpeg';
const AboutUs = () => {
  const options = {
    animationData: mission,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options as LottieAnimationOptions, { height: 400 });
    return (
        <div>
            <h3 className="text-3xl text-primary pt-20 text-center font-bold">Our Mission</h3>
            <div className='pb-16'>
      <Subline bgPrimary={false}/>
      </div>
            
          <div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    {/* Text Column */}
    <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
      delay: 0.4,
      x: { type: "spring", stiffness: 60 },
      opacity: { duration: 1 },
      ease: "easeIn",
      duration: 1,
    }}
    className="text-column p-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
      <p className="mb-4">Our mission is to provide warmth through winter clothes to those in need, ensuring that the harsh cold does not become a barrier to their well-being. We believe in community support and generosity to make a significant impact.</p>
      <h2 className="text-2xl font-bold text-primary mb-4">Our Goal</h2>
      <p>We aim to distribute over 10,000 winter clothing items this year, reaching out to underprivileged communities across different regions. Our goal is to not only provide physical warmth but also to spread hope and kindness.</p>
    </motion.div>
    
    {/* Image Column */}
    <div className="flex justify-center min-w-[300px]">{View}</div>
    {/* <div className="image-column p-4 flex justify-center">
      <motion.img
       initial={{ x: -100, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       transition={{
         delay: 0.2,
         x: { type: "spring", stiffness: 60 },
         opacity: { duration: 1 },
         ease: "easeIn",
         duration: 1,
       }}
       src={about} alt="Winter Clothes Distribution" className="w-full h-auto rounded-lg shadow-lg" />
    </div> */}
  </div>
</div>
        </div>
    );
};

export default AboutUs;