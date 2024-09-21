import Container from "../../components/Container";
import hero from "../../assets/img/herowinter.png";
import shape from "../../assets/img/shape-1-1.svg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      {/* Animated Curved Bottom */}
      <motion.div
        className="relative bg-gradient-to-r from-orange-500 to-slate-200 overflow-hidden"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 92%)" }}  
        animate={{
          clipPath: [
            // More pronounced wave curve
            "polygon(0 0, 100% 0, 100% 90%, 85% 94%, 70% 87%, 55% 94%, 40% 87%, 25% 94%, 0 90%)", 
            "polygon(0 0, 100% 0, 100% 92%, 85% 96%, 70% 90%, 55% 96%, 40% 90%, 25% 96%, 0 92%)", 
            "polygon(0 0, 100% 0, 100% 91%, 85% 95%, 70% 89%, 55% 95%, 40% 89%, 25% 95%, 0 91%)", 
            "polygon(0 0, 100% 0, 100% 93%, 85% 97%, 70% 91%, 55% 97%, 40% 91%, 25% 97%, 0 93%)",
          ],
          
        }}
        transition={{
          duration: 8, // Smooth transition
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Container className="pt-28 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-0">
            <div>
              <h1 className="text-3xl lg:text-6xl text-secondary font-bold">
                Empowering{" "}
                <span className="text-primary">
                  <Typewriter
                    words={["hope", "future", "lives"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>{" "}
                through giving
              </h1>
              <p className="text-accent my-5 lg:my-4">
                Join us in a collective journey of compassion and impact as we
                work hand in hand, transforming lives and nurturing hope around
                the world.
              </p>
              <Link to="/all-clothe">
                <button className="btn btn-primary text-white">Donate Now</button>
              </Link>
            </div>
            <div>
              <img src={hero} alt="Hero" />
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Background Shape with Framer Motion */}
      <motion.img
        src={shape}
        alt="Background Shape"
        className="absolute top-80 lg:top-28 left-2/3 transform -translate-x-1/2"
        initial={{ x: 0 }}
        animate={{
          x: [0, 30, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default Banner;
