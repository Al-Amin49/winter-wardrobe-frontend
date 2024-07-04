export const motionContainer = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 1,
      y: { type: "tween", stiffness: 60 },
      opacity: { duration: 0.5 },
      ease: "circInOut",
      duration: 1,
    },
  };
  