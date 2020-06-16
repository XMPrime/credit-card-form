import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const charVariants = {
  initial: {
    opacity: 0,
    y: "-30px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: { duration: 0.25 },
  },
  exit: {
    opacity: 0,
    // transition: { ease: "easeInOut" },
  },
};

export default function AnimatedChar({ char }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className='char'
        key={char}
        variants={charVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {char}
      </motion.div>
    </AnimatePresence>
  );
}
