import Container from "../../components/Container";
import hero from "../../assets/img/herowinter.png";
import shape from "../../assets/img/shape-1-1.svg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative overflow-hidden">
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
              <Link to="/all-clothe"><button className="btn btn-primary text-white">Donate Now</button></Link>
            </div>
            <div>
              <img src={hero} alt="Hero" />
            </div>
          </div>
        </Container>
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
      </div>
    </>
  );
};

export default Banner;
