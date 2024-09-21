import { motionContainer } from "../../components/Framermotion/motionvarient";
import Container from "../../components/Container";
import {motion} from 'framer-motion'
const RecentEvents = () => {
  return (
  <div className="pt-20">
      <Container>
      <motion.div
      initial={motionContainer.initial}
      whileInView={motionContainer.whileInView}
      transition={motionContainer.transition}
       className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {/* Left Column - Recent Events Text */}
        <div>
          <h4 className="text-3xl font-bold text-primary mb-4">Recent Events</h4>
          <div className="space-y-4">
            {/* Sample event card */}
            <p className="text-gray-700 mb-2">
              Join us for our annual Winter Clothes Distribution event! 
              We'll be providing warm winter clothing to those in need in our community.
              Your support and donations are greatly appreciated.
            </p>
            <p className="text-gray-600">Date: January 15, 2024</p>
            {/* Add more recent events as needed */}
          </div>
        </div>
        
      
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
          {/* Sample images */}
          <img src="https://rb.gy/hwg20c" alt="Event 1" className="w-full h-auto rounded-[50%] shadow-lg" />
          <img src="https://rb.gy/l8i9im" alt="Event 2" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="https://tinyurl.com/yufw7svx" alt="Event 3" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="https://tinyurl.com/4wb62ct9" alt="Event 4" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="https://rb.gy/l8i9im" alt="Event 5" className="w-full h-auto rounded-lg shadow-lg" />
          <img src="https://rb.gy/hwg20c" alt="Event 5" className="w-full h-auto rounded-[50%] shadow-lg" />
     
        </div>
      </motion.div>
    </Container>
  </div>
  );
};

export default RecentEvents;