import { motion } from "framer-motion";

type TSubline={
    bgPrimary:boolean
}
const Subline = ({ bgPrimary }:TSubline) => {
  
  const conditionalClass = bgPrimary ? "bg-primary" : "bg-secondary";

  return (
    <>
      <motion.div
        className={`${conditionalClass} h-2 rounded mt-2 w-[7%] mx-auto`} 
        initial={{ x: "-10%" }}
        animate={{ x: "10%" }}
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
