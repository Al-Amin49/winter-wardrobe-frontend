import { motion } from "framer-motion";
const Subline = () => {
  return (
    <>
      <motion.div
        className="text-primary bg-primary h-2 rounded mt-2 w-[20%] mx-auto"
        initial={{  x: "-10%" }}
        animate={{  x: "10%" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatType: "reverse"
        }}
      >
        <hr />
      </motion.div>
    </>
  );
};

export default Subline;
