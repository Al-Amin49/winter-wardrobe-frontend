export const motionContainer = {
    initial: { y: 70, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.7,
      y: { type: "spring", stiffness: 60,  },
      opacity: { duration: 0.5 },
      ease: "easeIn",
      duration: 1,
    },
  };
  